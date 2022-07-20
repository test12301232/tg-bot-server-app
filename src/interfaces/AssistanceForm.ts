export interface AssistanceForm {
   fio: string,
   phone: string,
   birth: string,
   addr: string,
   people_num: number,
   people_fio?: Array<string>,
   invalids: boolean,
   children: boolean,
   children_age?: Array<string>,
   food: boolean,
   drugs: boolean,
   water: boolean,
   products_detail: string,
   gigien: boolean,
   gigien_num: number,
   pampers: string,
   diet: string,
   pers_data_agreement: boolean,
   photo_agreement: boolean,
}


