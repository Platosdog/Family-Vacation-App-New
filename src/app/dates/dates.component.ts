import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
submitApplication() {
throw new Error('Method not implemented.');
}
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  selectedDays = 1;

  @Output() selectedDaysChange: EventEmitter<number> = new EventEmitter<number>();
applyForm: any;

  constructor() { }

  ngOnInit(): void {
     this.selectedDaysChange.emit(this.selectedDays);
  }

  onChange() {
     this.selectedDaysChange.emit(this.selectedDays);
  }
 }
