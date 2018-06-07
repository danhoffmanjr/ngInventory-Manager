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

  filteredProducts: IProduct[] = [];

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

  getProducts(): void {
    this._productService.getProducts()
      .subscribe(emitted => {
        this.products = emitted;
        this.filteredProducts = this.products;
      });
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.getProducts();
  }

}