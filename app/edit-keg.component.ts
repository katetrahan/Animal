import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <p>Task Complete? {{childSelectedKeg.brand}}</p>
      <hr>
      <h3>Edit Keg</h3>
      <label>Enter Keg Description:</label>
      <input [(ngModel)]="childSelectedKeg.name"><br>
      <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
    `
})

export class EditKegComponent{
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

doneButtonClicked() {
  this.doneButtonClickedSender.emit();
}

}
