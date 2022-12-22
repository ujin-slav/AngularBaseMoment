import { Component, ErrorHandler, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { data as products } from './data/products';
import { ProductsService } from './services/products.service';
import { IContragent } from './models/contragent';

import { catchError, tap, throwError } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from './services/errors.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'course'
  text:string = ''
  products:IProduct[] = products
  users:IContragent[]
  loading:boolean = false
  modal:boolean = false

  constructor(
    private productService:ProductsService,
    private errorService:ErrorsService 
  ){}

  ngOnInit(): void {
    this.loading = true
    this.productService.getCarousel()
      .pipe(
        tap(()=>this.loading = false),
        catchError(this.errorHandler.bind(this))
        )
        .subscribe((data:any)=>{
          this.users=data.docs
          console.log(data)
        })
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(()=>error.message)
  }

  inputHandler(e:any){
    console.log(e)
  }

  clickHandle(){
    this.modal = !this.modal 
  }

}
