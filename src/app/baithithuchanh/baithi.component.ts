import {Component} from "@angular/core";
import {IHeader} from "../interfaces/baithi.interface";
import {BaithiService} from "../services/baithi.service";

@Component({
  selector:"app-baithi",
  templateUrl:"./baithi.component.html",
  styleUrls:['./baithi.component.css']
})
export class BaithiComponent{
  //@ts-ignore
  data: IHeader =null;
  constructor(private service: BaithiService) {

  }
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.baithi()
      .subscribe( value=>{
        this.data = value;
      })
  }

}

