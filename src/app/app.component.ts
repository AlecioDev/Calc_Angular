import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'CalculadoraAngular';
  result? : number;
  num1? : number;
  num2? : number;

  somar(){
    this.result=this.num1!+this.num2!;
  }
  sub(){
    this.result=this.num1!-this.num2!;
  }
  multi(){
    this.result=this.num1!*this.num2!;
  }
  divis(){
    this.result! /=this.num1!+this.num2!;
  }
  raiz(){
    this.result=Math.sqrt(this.num1!+this.num2!);
  }
  zerar(){
    this.result=0;

  }

}

