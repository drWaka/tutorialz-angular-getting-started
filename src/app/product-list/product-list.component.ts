import { Component } from "@angular/core";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products;
  constructor(private cart: CartService) {
    this.products = products;
  }
  addToCart(product) {
    this.cart.addItem(product);
    window.alert("The product has been added to your cart!");
  }
  onNotify() {
    window.alert("The product was added to your watchlist!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
