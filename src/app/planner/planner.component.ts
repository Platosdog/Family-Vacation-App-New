import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})

export class PlannerComponent implements OnInit {
  detailForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.detailForm = this.fb.group({
      day: [''],
      name: [''],
      meal: [''],
      other: ['']
    });
 }

  ngOnInit(): void {
    this.detailForm = new FormGroup({
      day: new FormControl(''),
      name: new FormControl(''),
      meal: new FormControl(''),
      other: new FormControl('')
    })
    throw new Error('Method not implemented.');
  }
  save() {
    this.detailForm = new FormGroup({
      day: new FormControl(''),
      name: new FormControl(''),
      meal: new FormControl(''),
      other: new FormControl('')
    })
    throw new Error('Method not implemented.');
    }
}
