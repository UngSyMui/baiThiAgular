import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./productlist/products.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./weather/weather.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {EmailComponent} from "./email/email.component";
import {Assignment1Component} from "./assignment1/assignment1.component";
import {Assignment2Component} from "./assignment2/assignment2.component";
import {BaithiComponent} from "./baithithuchanh/baithi.component";




const appRoutes: Routes =[

  {
    path:'lop-hoc', component: ClassroomComponent
  },
  {
    path:'san-pham', component: ProductsComponent
  },
  {
    path:'thoi-tiet',component: WeatherComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    ProductComponent,
    ProductsComponent,
    WeatherComponent,
    EmailComponent,
    Assignment1Component,
    Assignment2Component,
    BaithiComponent,








  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

