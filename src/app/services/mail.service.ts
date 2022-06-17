import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ICategory, IDataJSON} from "../interfaces/category.interface";


@Injectable({
  providedIn:'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) {
  }

  mailList() {
    return this.httpClient.get<IDataJSON>("http://localhost:4200/assets/data.json");
  }

}
