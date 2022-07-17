import ApiError from "../exeptions/ApiError";
import { Request, Response, NextFunction } from "express"
import UserDataService from "../services/UserDataService";
import { validationResult } from "express-validator";
import HumansListDto from "../dtos/HumansListDto"
import HumansFormListDto from "../dtos/HumansFormList";


export default class UserDataController {

   static async catchAssistaceForm(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации формы', errors.array()));
         }

         const save = await UserDataService.catchAssistaceForm(request.body.form)

         return response.json(save);
      } catch (e) {
         next(e);
      }
   }

   static async sendAssistanceForm(request: Request, response: Response, next: NextFunction) {
      try {
         const fio = request.body.fio;
         const forms = await UserDataService.sendAssistanceForm(fio);

         return response.json(new HumansFormListDto(forms));
      } catch (e) {
         next(e);
      }
   }

   static async sendHumansList(request: Request, response: Response, next: NextFunction) {
      try {
         const { limit, page } = request.query;

         if (!limit || !page) {
            return next(ApiError.BadRequest('Wrong query!'));
         }
         const { humansList, count } = await UserDataService.sendHumansList({ limit, page });

         return response.set('X-Total-Count', count.toString()).json(new HumansListDto(humansList));
      } catch (e) {
         next(e);
      }
   }
}