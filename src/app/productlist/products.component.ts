import {Component} from "@angular/core";
import {IProduct} from "../interfaces/product.interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  data: IProduct[] = [
    { Id: 1 , ProductName: 'SP1' , Price:10000, Qty: 2},
    { Id: 2 , ProductName: 'SP2' , Price:20000, Qty: 4},
    { Id: 3 , ProductName: 'SP3' , Price:30000, Qty: 6},
  ];
}
