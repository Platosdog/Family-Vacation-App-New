import {Component} from '@angular/core';

export interface PeriodicElement {
  day: number;
  name: string;
  meal: string;
  other: string;
}

const FormGroup: PeriodicElement[] = [
  {day: 1, name: 'J1K1', meal: 'lunch', other: 'cesear chicken wraps'}
];

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent {
  displayedColumns: string[] = ['day', 'name', 'meal', 'other'];
  dataSource = FormGroup;
}
