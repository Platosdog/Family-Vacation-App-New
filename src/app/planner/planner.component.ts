import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})

export class PlannerComponent implements OnInit {
  detailForm!: FormGroup;

  constructor(private fb: FormBuilder) { // I usually call this 'fb', but call it what you want
    this.detailForm = this.fb.group({
      day: [''],
      name: [''],
      meal: [''],
      other: ['']
    });
 }

  ngOnInit(): void {
    this.detailForm = new FormGroup({
      day: new FormControl('')
    })
    throw new Error('Method not implemented.');
  }

}
