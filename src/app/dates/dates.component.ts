import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
  days = [1, 2, 3, 4, 5, 6, 7];
  selectedDays = 1;

  @Output() selectedDaysChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
     this.selectedDaysChange.emit(this.selectedDays);
  }

  onChange() {
     this.selectedDaysChange.emit(this.selectedDays);
  }
 }
