import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable }  from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ProductService {
    private _apiResourceUrl: string = './api/products/products.json'; // simulating web api end point & json response type

    constructor(private _http: HttpClient) {

    }
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._apiResourceUrl)
            .pipe(catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}