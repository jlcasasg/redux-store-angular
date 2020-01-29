import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState } from '../store/reducers';
import { FoodService } from '../food.service';
import { Product } from '../product/product.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners = [
    {
      src:
        'http://lorempixel.com/400/200/food/1',
      alt: 'A tasty treat'
    },
    {
      src:
        'http://lorempixel.com/400/200/food/2',
      alt: 'Chocolate covered pancakes'
    },
    {
      src:
        'http://lorempixel.com/400/200/food/3',
      alt: 'Burger and fries'
    },
    {
      src:
        'http://lorempixel.com/400/200/food/4',
      alt: 'Get ready to slice'
    }
  ];
  constructor(
    private ngRedux: NgRedux<InitialState>,
    private foodService: FoodService
  ) { }

  @select('items') items$: Observable<Array<Product>>;

  ngOnInit() {
    this.foodService.getAll();
    this.items$.subscribe(items => console.log(items))
  }

}
