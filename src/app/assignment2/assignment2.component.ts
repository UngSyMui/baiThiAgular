import {Component} from "@angular/core";
import {Child, IHeader} from "../interfaces/header.interface";
import {HeaderService} from "../services/header.service";
import {IMail} from "../interfaces/mail.interface";

@Component({
  selector:"app-assignment2",
  templateUrl:"./assignment2.component.html",
  styleUrls:["./assignment2.component.css"],
})
export class Assignment2Component{
  //@ts-ignore
  data: IHeader = null;


  constructor(private service: HeaderService) {

  }
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.headerList()
      .subscribe( value=>{
        this.data = value;
      })
  }
  // changeHeader(name:string){
  //   this.service.headerList().subscribe(value => {
  //     for(var i=0;i<value.data.categories.length;i++){
  //       if(value.data.categories[i].name==){
  //
  //       }
  //
  //     }
  //
  //   })
  // }
}
