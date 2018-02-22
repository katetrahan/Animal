import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <ul>
    <li (click)="isTapped(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}} {{currentKeg.brand}}
    <input *ngIf="currentKeg.tapped === true" type="checkbox" checked (click)= "toggleDone(currentKeg, false)"/>
    <input *ngIf="currentKeg.tapped === true" type= "checkbox" (click)="toggleDone(currentKeg, true)"/>
    <button (click)="editButtonHasBeenClicked(currentKeg)">edit!</button></li>
  </ul>
  `
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  isTapped(clickedKeg: Keg) {
    if(clickedKeg.tapped === true) {
      alert("This keg is tapped!");
    } else {
      alert("pour away!");
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
 }
