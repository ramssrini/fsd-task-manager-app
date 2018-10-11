import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
@Pipe({
  name: 'filterParentTask'
})
export class FilterParentTaskPipe implements PipeTransform {
  transform(items: Task[], parentTaskSearchText: string): any[] {
    if (!parentTaskSearchText){
        return items;
      }
      if (!Array.isArray(items)){
        return items;
      }
      return items.filter( it => {
        return it.parentTaskDesc.toLowerCase().includes(parentTaskSearchText.toLowerCase());
      });
   }
}