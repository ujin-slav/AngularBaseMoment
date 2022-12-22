import { Component } from '@angular/core';
import { ErrorsService } from 'src/app/services/errors.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent {

  constructor(public errorService:ErrorsService){}

}
