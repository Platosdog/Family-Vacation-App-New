import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './dates/dates.component';
import { PlannerComponent } from './planner/planner.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 // { path: '', component: },
  { path: 'dates', component: DatesComponent},
  { path: 'planner', component: PlannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
