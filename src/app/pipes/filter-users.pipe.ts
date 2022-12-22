import { Pipe, PipeTransform } from '@angular/core';
import { IContragent } from '../models/contragent';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: IContragent[], searchText: string): IContragent[] {
    return users.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()))
  }

}
