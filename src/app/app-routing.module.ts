import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './dates/dates.component';
import { PlannerComponent } from './planner/planner.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { SigninMicrosoftComponent } from './account/signin-microsoft/signin-microsoft.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{ path: '**', component: PageNotFoundComponent },
  { path: 'dates', component: DatesComponent},
  { path: 'planner', component: PlannerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninMicrosoftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
