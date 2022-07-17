import { AssistanceForm } from "../interfaces/AssistanceForm";

export default class HumansFormListDto {
   readonly humansFormList: Array<AssistanceForm>

   constructor(model: Array<AssistanceForm>) {
      this.humansFormList = model;
   }
}