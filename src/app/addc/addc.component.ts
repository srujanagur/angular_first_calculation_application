import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addc',
  templateUrl: './addc.component.html',
  styleUrls: ['./addc.component.css']
})
export class AddcComponent implements OnInit {
  @Input() val1: number = 0;
  @Input() val2: number = 0;
  add = 0;

  constructor() { }

  ngOnInit(): void {
    this.add=(this.val1)+(this.val2)
  }
  ngDoCheck(): void {
    this.add=(this.val1)+(this.val2)  
  }
  

}
