import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grey-circle',
  templateUrl: './grey-circle.component.html',
  styleUrls: ['./grey-circle.component.css']
})
export class GreyCircleComponent implements OnInit {

  @Input() dimensionInPx: number;

  constructor() { }

  ngOnInit(): void {
  }

}
