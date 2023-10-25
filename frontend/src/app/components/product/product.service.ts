import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar:MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string):void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: ['msg-succes']
    })
    
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any):Observable<any>{
    this.showMessage('Ocorreu um erro!!')
    return EMPTY
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id:any):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id:any):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  } 

}
