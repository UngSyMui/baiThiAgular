import {Component} from "@angular/core";
import {MyEmail} from "../interfaces/email.interface";
import {EmailService} from "../services/email.service";

@Component({
  selector:"app-email",
  templateUrl:"./email.component.html",
  styleUrls:["./email.component.css"]
})

export class EmailComponent{
  //@ts-ignore
  data: MyEmail = null;
  constructor(private service: EmailService) {
  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.email()
      .subscribe( value=>{
        this.data = value;
      })
  }

}
