import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {
   @Input() val1: number = 0;
  @Input() val2: number = 0;
  result = 0;

  constructor() { }

 ngOnInit(): void {
    this.result=(this.val1)*(this.val2)
  }
  ngDoCheck(): void {
    this.result=(this.val1)*(this.val2)  
  }

}
