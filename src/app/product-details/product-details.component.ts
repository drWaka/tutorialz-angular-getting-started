import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("productId"));

    this.product = products.find(product => product.id === productId);
  }

  addItemToCart(product) {
    this.cart.addItem(product);
    window.alert("Item Added to Cart");
  }
}
