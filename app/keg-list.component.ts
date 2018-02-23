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
    <hr>
  <ul>
    <li *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">{{currentKeg.name}} {{currentKeg.brand}} {{currentKeg.tapped}}<br>
    <span [class]="costColor(currentKeg)">{{currentKeg.price}} per pint</span>
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



   costColor(currentKeg) {
     if (currentKeg.price < 4) {
       return "bg-danger";
     } else if (currentKeg.price >= 10){
       return "bg-warning";
     } else {
       return "bg-info";
     }
   }

}
