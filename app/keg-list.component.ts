import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All drinks</option>
      <option value="full">Full Kegs</option>
      <option value="empty">Empty</option>
    </select>

  <ul>
    <li *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">{{currentKeg.name}} {{currentKeg.brand}} {{currentKeg.tapped}}
    <button (click)="editButtonHasBeenClicked(currentKeg)">edit!</button>
    <button (click)="drinkPrintButtonHasBeenClicked(currentKeg)">pint sold</button></li>

  </ul>
  `
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

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

}
