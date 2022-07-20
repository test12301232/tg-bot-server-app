import { AssistanceForm } from "../interfaces/AssistanceForm";
import { Types } from "mongoose";

export default class HumansListDto {
   readonly humansList: Array<{ fio: string, _id: Types.ObjectId }>

   constructor(model: Array<(AssistanceForm & { _id: Types.ObjectId })>) {
      this.humansList = model;
   }
}