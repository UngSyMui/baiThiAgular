import {HttpClient, HttpParams} from "@angular/common/http";
import {IHeader} from "../interfaces/header.interface";
import {Injectable} from "@angular/core";



@Injectable({
  providedIn:'root'
})
export class HeaderService{

  constructor(private httpClient: HttpClient) {
  }

  headerList() {
    return this.httpClient.get<IHeader>("http://localhost:4200/assets/tsconfig.json");
  }

}
