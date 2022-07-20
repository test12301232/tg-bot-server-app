import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"
import ApiError from "../exeptions/ApiError"
import AssistanceService from "../services/AssistanceService"
import HumansListDto from "../dtos/HumansListDto"
import AssistanceFormDto from "../dtos/AssistanceFormDto"


export default class AssistanceController {

   static async catchAssistaceForm(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации формы!', errors.array()));
         }

         const saved = await AssistanceService.catchAssistaceForm(request.body.form)

         return response.json({ message: "Успешно сохранено!", saved });
      } catch (e) {
         next(e);
      }
   }

   static async sendAssistanceForm(request: Request, response: Response, next: NextFunction) {
      try {
         const fio = request.body.fio;
         if (!fio) {
            return next(ApiError.BadRequest('Отсутсвует тело запроса!'));
         }
         const forms = await AssistanceService.sendAssistanceForm(fio);

         return response.json(new AssistanceFormDto(forms));
      } catch (e) {
         next(e);
      }
   }

   static async sendHumansList(request: Request, response: Response, next: NextFunction) {
      try {
         const { limit, page } = request.query;
         if (!limit || !page) {
            return next(ApiError.BadRequest('Неверный запрос!'));
         }
         const { humansList, count } = await AssistanceService.sendHumansList({ limit, page });

         return response.set('X-Total-Count', count.toString()).json(new HumansListDto(humansList));
      } catch (e) {
         next(e);
      }
   }

   static async deleteHuman(request: Request, response: Response, next: NextFunction) {
      try {
         const id = request.body.id;
         if (!id) {
            return next(ApiError.BadRequest('Отсутсвует тело запроса!'));
         }
         const deleteResult = await AssistanceService.deleteHuman(id);

         return response.json(deleteResult);
      } catch (e) {
         next(e);
      }
   }

   static async modifyAssistanceForm(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);
         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации формы!', errors.array()));
         }
         const { form, id } = request.body;
         if (!form || !id) {
            return next(ApiError.BadRequest('Отсутсвует тело запроса!'));
         }
         const updateResult = await AssistanceService.modifyAssistanceForm(id, form);

         return response.json(updateResult);
      } catch (e) {
         next(e);
      }
   }
}