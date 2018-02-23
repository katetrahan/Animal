import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div>
    <label>Enter Animal Species:</label>
    <input #newSpecies>
    <label>Enter Animal Name:</label>
    <input #newName>
  </div>
  <div>
    <button (click)="submitForm(newSpecies.value); newSpecies.value='';"
    (click)="submitForm(newName.value); newName.value='';">Add</button>

  </div>`
})

  export class NewAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
      var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }
