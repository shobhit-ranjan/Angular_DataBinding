import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {


  public name = "shobhit"
  public hasError = true;
  public sucess = "text-success"
  public isSpecial = true;

  public greeting = ""

  public twowaybinding = '';

  public messageclass = {
    "text-success": !this.hasError,
    "text-danger": !this.hasError,
    "text-special": !this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

  user() {
    return "hello" + this.name
  }

  onClick() {
    this.greeting = "Welcome to Angular World"
    console.log("Welcome to Angular")
  }

  logMessage(value: any) {

    console.log(value);
  }
  public myid = 'testone'

}
