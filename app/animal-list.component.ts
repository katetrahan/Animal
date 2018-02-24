import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <select (change) = "onChange($event.target.value)">
      <option value="allAges" selected="selected">All animals</option>
      <option value="young">Young</option>
      <option value="old">Mature</option>
    </select>
    <hr>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | wisdom:filterByWisdom ">{{currentAnimal.species}}<br>
    <button (click)="editButtonHasBeenClicked(currentAnimal)">edit</button></li>
  </ul>`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal [];
  @Output() clickSender = new EventEmitter();

  filterByWisdom: string = "allAges";

  onChange(optionFromMenu) {
    this.filterByWisdom = optionFromMenu;
  }


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }


}
