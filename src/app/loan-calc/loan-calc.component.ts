import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-calc',
  templateUrl: './loan-calc.component.html',
  styleUrls: ['./loan-calc.component.css']
})
export class LoanCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

}
typeofLoan = '';
typeLoan(loanType: any) {
  this.typeofLoan = loanType;
}
emi = 0;
totalValue = 0
roi: string = '';
amount = 0;
interest = 0;
rate = 0;
months = 0;
calculate(pAmount: string, time: string, loanType: string) {
  console.log(pAmount, time, loanType);
  this.emi = 0;
  this.amount = parseFloat(pAmount);
  this.months = parseInt(time);
  this.rate = parseFloat(loanType);
  this.interest = (this.amount * (this.rate * 0.01)) / this.months;
  this.emi = this.amount / this.months + this.interest;
  this.totalValue = this.interest * this.emi;
  console.log(this.emi);
  console.log(this.totalValue);
}
}