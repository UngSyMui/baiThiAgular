import {Component} from "@angular/core";
import {IMail} from "../interfaces/mail.interface";
import {ICategory} from "../interfaces/category.interface";
import {MailService} from "../services/mail.service";

@Component({
  selector:"app-assignment1",
  templateUrl:"./assignment1.component.html"
})
export class Assignment1Component{

  mails: IMail[]=[];
  categories: ICategory[] = [];
  constructor(private service: MailService) {

  }
  ngOnInit(){
    this.service.mailList().subscribe(value => {
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category:string,child:string){
    var new_list: IMail[] = [];
    this.service.mailList().subscribe(value => {
      for(var i=0;i<value.data.mails.length;i++){
        if(value.data.mails[i].category==category&&value.data.mails[i].child==child){
          new_list.push(value.data.mails[i]);
        }

      }
      this.mails=new_list;
    })
  }

}
