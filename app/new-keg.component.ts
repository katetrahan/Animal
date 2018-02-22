import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Enter Keg Description:</label>
    <input #newName>
  </div>
  <div>
    <button (click)="submitForm(newName.value); newName.value=' ';">Add</button>
  </div>`
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: string, alcohol: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcohol );
    this.newKegSender.emit(newKegToAdd);
  }
}
