import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe }  from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class ProductService {

    private productsUrl = "api/products";

    constructor(private _http: HttpClient) {
    }

    // method to fetch list of products 
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productsUrl)
      .pipe(
        tap(products => console.log(`getProducts() fetched products`)),
        catchError(this.handleError('getProducts', []))
      );
  }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
       
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
       
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}