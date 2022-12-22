
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { GlobalErrorComponent } from './component/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { ModalComponent } from './component/modal/modal.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { FocusDirective } from './derectives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CarouselComponent,
    GlobalErrorComponent,
    FilterUsersPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
