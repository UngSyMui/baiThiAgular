import {HttpClient, HttpParams} from "@angular/common/http";
import {MyEmail} from "../interfaces/email.interface";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) {
  }

  email() {
    return this.httpClient.get<MyEmail>("http://localhost:4200/assets/data.json")
  }

}
