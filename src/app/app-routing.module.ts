import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { FixedCalcComponent } from './fixed-calc/fixed-calc.component';
import { LoanCalcComponent } from './loan-calc/loan-calc.component';
import { SimpleCalcComponent } from './simple-calc/simple-calc.component';

const routes: Routes = [
  {
    path: 'fixed',
    component: FixedCalcComponent,
  },
  {
    path: 'loan',
    component: LoanCalcComponent,
  },
  {
    path: 'color-changer',
    component: ColorChangerComponent,
  },
  {
    path:'simple-calc',
    component:SimpleCalcComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
