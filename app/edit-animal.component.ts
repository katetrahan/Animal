import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <h3>{{childSelectedAnimal.age}}</h3>
      <h3>Edit Animal</h3>
      <label>Enter Animal Name</label>
      <input [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Enter Amount of Caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.age"><br>
      <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
    `
})

export class EditAnimalComponet {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
