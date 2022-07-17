import mongoose from "mongoose";
import { AssistanceForm } from "../interfaces/AssistanceForm";

const { Schema, model } = mongoose;
const AssistanceSchema = new Schema<AssistanceForm>({
   fio: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   birth: {
      type: String,
      required: true,
   },
   addr: {
      type: String,
      required: true,
   },
   people_num: {
      type: Number,
      required: true,
   },
   people_fio: {
      type: Array,
      default: [''],
   },
   invalids: {
      type: Boolean,
      default: false,
   },
   children: {
      type: Boolean,
      default: false,
   },
   children_age: {
      type: Array,
      default: [''],
   },
   food: {
      type: Boolean,
      default: false,
   },
   drugs: {
      type: Boolean,
      default: false,
   },
   water: {
      type: Boolean,
      default: false,
   },
   products_detail: {
      type: String,
      default: '',
   },
   gigien: {
      type: Boolean,
      default: false,
   },
   gigien_num: {
      type: Number,
      default: 0,
   },
   pampers: {
      type: Boolean,
      default: false,
   },
   diet: {
      type: String,
      default: '',
   },
   pers_data_agreement: {
      type: Boolean,
   },
   photo_agreement: {
      type: Boolean,
   }
});

export default model<AssistanceForm>('Assistance', AssistanceSchema);