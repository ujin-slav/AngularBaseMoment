import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  form = new FormGroup({
    title: new FormControl('',[
      Validators.minLength(6),
      Validators.required
    ])
  })

  get title() {
    return this.form.controls.title
  }

  changeHandler(e:any){
    console.log(e)
  }
  
  submit(){
    console.log(this.form.controls.title)
  }
  
}
