import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { DatesComponent } from './dates/dates.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { PlannerComponent } from './planner/planner.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';
import { SigninMicrosoftComponent } from './account/signin-microsoft/signin-microsoft.component';
import { SigninGoogleComponent } from './account/signin-google/signin-google.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanComponent } from './plan/plan.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DatesComponent,
    PlannerComponent,
    LoginComponent,
    SigninMicrosoftComponent,
    SigninGoogleComponent,
    PageNotFoundComponent,
    PlanComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatDatepickerModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule, FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
