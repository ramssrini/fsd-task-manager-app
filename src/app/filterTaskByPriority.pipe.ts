import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
@Pipe({
  name: 'filterTaskByPriority'
})
export class FilterPriorityTaskPipe implements PipeTransform {
  transform(items: Task[], priorityTaskSearchText: string): any[] {
    if (!priorityTaskSearchText){
        return items;
      }
      if (!Array.isArray(items)){
        return items;
      }
      return items.filter( it => {
        return it.priority.toString().includes(priorityTaskSearchText);
      });
   }
}