import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent {
  date = new FormControl(new Date());

  exportDate() {
     const selectedDate = this.date.value;
     console.log('Selected Date:', selectedDate);
  }
 }
