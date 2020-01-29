import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() fruits: Array<Product>;
  
  constructor() { }

  ngOnInit() {
    console.log(this.fruits);
  }

}
