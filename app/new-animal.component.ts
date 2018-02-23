import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div>
    <label>Enter Species:</label>
    <input #newSpecies><br>
    <label>Enter Name:</label>
    <input #newName><br>
    <label>Enter Age</label>
    <input #newAge><br>
    <label>Enter Diet</label>
    <input #newDiet><br>
    <label>Enter Zoo Location</label>
    <input #newLocation><br>
    <label>Enter Caretakers Needed</label>
    <input #newCaretakers><br>
    <label>Enter Sex:</label>
    <input #newSex><br>
    <label>Enter One Like</label>
    <input #newLike><br>
    <label>Enter One Dislike</label>
    <input #newDislike><br>


  </div>
  <div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newSpecies.value='';"
  >Add</button>

  </div>`
})

  export class NewAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
      var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }
