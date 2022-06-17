import {HttpClient, HttpParams} from "@angular/common/http";
import {IHeader} from "../interfaces/baithi.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class BaithiService {

  constructor(private httpClient: HttpClient) {
  }

  baithi() {
    return this.httpClient.get<IHeader>("http://localhost:4200/assets/baithi.json")
  }

}
