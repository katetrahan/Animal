import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Species:</h3>
      <p>{{childSelectedAnimal.species}}</p>
      <h3>Name:</h3>
      <p>{{childSelectedAnimal.name}}</p>
      <h3>Age:</h3>
      <p>{{childSelectedAnimal.age}}</p>
      <h3>Caretakers</h3>
      <p>{{childSelectedAnimal.caretakers}}</p>
      <h3>Edit Animal</h3>
      <label>Enter Animal Name</label>
      <input [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Enter Amount of Caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
      <label>Enter Age</label>
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
