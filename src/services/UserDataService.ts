import AssistanceModel from "../models/AssistanceModel";
import { AssistanceForm } from "../interfaces/AssistanceForm";


export default class UserDataService {
   static async catchAssistaceForm(form: AssistanceForm) {
      const user = await AssistanceModel.create(form);
      return user;
   }

   static async sendAssistanceForm(fio: string) {
      const form = await AssistanceModel.find({ fio }, { _id: 0, __v: 0 });
      return form;
   }

   static async sendHumansList({ limit = Infinity, page = 1 }: any) {

      const skip: number = (page - 1) * limit;
      const humansList = await AssistanceModel.find({}, { fio: 1 })
         .skip(skip)
         .limit(limit);

      const count: number = await AssistanceModel.count();
      return { humansList, count };
   }
}