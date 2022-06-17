import {Component} from "@angular/core";
@Component({
  selector:"app-classroom",
  templateUrl:"./classroom.component.html"
})

export class ClassroomComponent{
  className:string = 'T2204E';
  studentNames =["Do Duy Nam","Nguyen Van Duc","Tran Van B"];
  studentAges = [18,16,22];
  studentPhones = [999999,88888,7777777];

  changeName(){
    this.className = 'T2205-M';
  }

}
