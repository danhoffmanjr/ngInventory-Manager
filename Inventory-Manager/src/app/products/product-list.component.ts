import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {
    this.listFilter = '';
  }

  title: string = "Product List";
  showImage: boolean = false;
  ratingClickNotice: string = '';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  errorMessage: string;

  filteredProducts: IProduct[];

  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotifyClick(message: string): void {
    this.ratingClickNotice = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.products = this._productService.products;
    this.filteredProducts = this.products;
    console.log(this.products);

    /*.subscribe(products => {
        this.products = products;
        console.log(products);
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error);
      */
  }

}