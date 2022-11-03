import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent implements OnInit {
  @Input() val1: number = 0;
  @Input() val2: number = 0;
  substraction = 0;

  constructor() { }

  ngOnInit(): void {
    this.substraction=(this.val1)-(this.val2)
  }
  ngDoCheck(): void {
    this.substraction=(this.val1)-(this.val2)  
  }

}
