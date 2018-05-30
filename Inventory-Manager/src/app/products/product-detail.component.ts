import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  title: string = "Product Detail";
  product: IProduct;

  onBack(): void {
    this._router.navigate(['/products']);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.title += `: ${id}`;
    this.product = {
      "id": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "rating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

}