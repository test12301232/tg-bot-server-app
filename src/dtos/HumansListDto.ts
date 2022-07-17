import { AssistanceForm } from "../interfaces/AssistanceForm";

export default class HumansListDto {
   readonly humansList: Array<string>

   constructor(model: Array<AssistanceForm>) {
      this.humansList = model.map((item) => {
         return item.fio;
      });
   }
}