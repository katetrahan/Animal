import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}} {{currentKeg.brand}}

    <button (click)="editButtonHasBeenClicked(currentKeg)">edit!</button>
    <button (click)="drinkPrintButtonHasBeenClicked(currentKeg)">pint sold</button></li>
  </ul>
  `
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }




   drinkPrintButtonHasBeenClicked(kegToDrink: Keg) {

     if (kegToDrink.tapped > 0) {
       kegToDrink.tapped -= 1;
     } else {
       alert("Empty keg!!")
     }
    }

   }
   //
  //  priorityColor(currentTask) {
  //    if (currentTask.priority === 3) {
  //      return "bg-danger";
  //    } else if (currentTask.priority === 2){
  //      return "bg-warning";
  //    } else {
  //      return "bg-info";
  //    }
  //  }
  //  filterByCompleteness: string = "incompleteTasks";
  //
  //  onChange(optionFromMenu) {
  //    this.filterByCompleteness = optionFromMenu;
  //  }
  //   toggleDone(clickedTask: Task, setCompleteness: boolean) {
  //     clickedTask.done = setCompleteness;
  //   }
