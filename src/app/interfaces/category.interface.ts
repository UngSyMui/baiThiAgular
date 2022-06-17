import {IMail} from "./mail.interface";

export interface ICategory{
  name: string;
  childs: Ichild[];
}

export interface Ichild{
  name: string;
}

export interface IDataJSON{
  status: number;
  message: string;
  data: IData;
}

export interface IData{
  categories: ICategory[];
  mails: IMail[];
}
