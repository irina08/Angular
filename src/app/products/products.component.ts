import { Component, OnInit } from '@angular/core';
import productData from './products.json';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Products: any = productData;

}
