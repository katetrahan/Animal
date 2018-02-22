import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Welcome{{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentBrew}}</h3>
    <keg-list [childKegList]="masterKegList" (clickSender) = "editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
  `
})
export class AppComponent {
  currentFocus: string = 'Do you love beer?';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Total Domination', 'Ninkasi', "30", "5.7"),
    new Keg('Red Chair', 'Deschutes', '40', '5.4'),
    new Keg('Fresh Squeezed', 'Deschutes', '50', '6.7')
  ];

 finishedEditing() {
   this.selectedKeg = null;
 }

 editKeg(clickedKeg) {
   this.selectedKeg = clickedKeg;
 }

 addKeg(newKegFromChild: Keg) {
   this.masterKegList.push(newKegFromChild);
 }
}
