import {Component,Input} from "@angular/core";
@Component({
  selector: "app-student",
  templateUrl:"./student.component.html"
})
export class StudentComponent{
  @Input("studentName") studentName !:string;
  @Input("studenAge") studentAge !:number;
  @Input("studentPhone") studentPhone !:number;
  //! Bat buoc phai truyen tu cha xuong con, ? truyen cung duoc khong truyen cung duoc
  // changeName(){
  //   this.studentName = "Chu Van An";
  // }
}
