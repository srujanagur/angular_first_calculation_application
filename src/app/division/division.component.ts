import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  @Input() val1: number = 0;
  @Input() val2: number = 0;
  division = 0;


  constructor() { }

  ngOnInit(): void {
    this.division=(this.val1)/(this.val2)
  }
  ngDoCheck(): void {
    this.division=(this.val1)/(this.val2)  
  }
}
