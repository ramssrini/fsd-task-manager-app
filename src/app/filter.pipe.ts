import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Task[], taskSearchText: string): any[] {
    if (!taskSearchText){
        return items;
      }
      if (!Array.isArray(items)){
        return items;
      }
      return items.filter( it => {
        return it.taskDesc.toLowerCase().includes(taskSearchText.toLowerCase());
      });
   }
}