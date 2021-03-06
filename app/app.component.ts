import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal Helper</h1>
    <h3>{{currentAnimal}}</h3>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)= "editAnimal($event)"></animal-list><hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal><hr>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

  export class AppComponent{
    currentAnimal: string = "Care for Animals";
    selectedAnimal = null;


    masterAnimalList: Animal[] = [
      new Animal('Goat', 'Goatie', 1, 'Grass', 'Portland', 1, 'Female', 'Sunshine', 'Being Petted'),
      new Animal('Turtle', 'Flash', 5, 'Lettuce', 'Portland', 1, 'Female', 'Walking', 'Rain'),
      new Animal('Polar Bear', 'Boots', 3, 'Fish', 'Portland', 3, 'Male', 'Swimming', 'People hiiting the glass')

    ];

    finishedEditing() {
      this.selectedAnimal =null;
    }

    editAnimal(clickedAnimal) {
      this.selectedAnimal= clickedAnimal;
    }

    addAnimal(newAnimalFromChild: Animal) {
      this.masterAnimalList.push(newAnimalFromChild);
    }

  }
