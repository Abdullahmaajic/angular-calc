import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedCalcComponent } from './fixed-calc/fixed-calc.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { LoanCalcComponent } from './loan-calc/loan-calc.component';
import { SimpleCalcComponent } from './simple-calc/simple-calc.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedCalcComponent,
    ColorChangerComponent,
    LoanCalcComponent,
    SimpleCalcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
