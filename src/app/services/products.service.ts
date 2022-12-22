import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductsService {
    
    constructor(private http:HttpClient){}

    getCarousel(){
       return this.http.post("http://localhost:5000/api/getcarousel",{page:1,limit:10,search:""})
    }

}