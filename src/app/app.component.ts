import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproj';
  myname = "ganaesh";
  firstNumber : number=0;
  secondNumber: number = 0;
 
  clear(){
    this.firstNumber = 0;
    this.secondNumber = 0;
}

 
}
