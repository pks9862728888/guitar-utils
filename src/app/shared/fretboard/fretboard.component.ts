import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {

  // Guitar fretboard constants
  fretWidth = 50;
  fretboardWidth = this.fretWidth * 22;
  fretMarginTop = [-165, -165.5, -165.7, -165.9, -166.1, -165, -165.2, -165.6, -165.8, -165.8, -165.8, -165.8, -165.8, -165.8, -165.6, -165.6, -165.6, -165.6, -165.6, -165.6, -165.6, -165];
  fretNoMarginLeft = [20, 42, 44, 40, 40, 40, 42, 44, 40, 37, 34, 30, 34, 34, 34, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32];

  constructor() { }

  ngOnInit(): void {
  }

  range(no: number): Number[] {
    var arr: Number[] = [];
    for (var i = 1; i <= no; i++) {
      arr.push(i);
    }
    return arr;
  }

  getLeftMarginOfFret(no: number) : number {
    return this.fretWidth * no;
  }

  getTopMarginOfFret(no: number) : number {
    var count = 1;
    for (let i of this.fretMarginTop) {
      if (no == count) {
        return +i;
      } else {
        count += 1;
      }
    }
  }

  getFretNumberMarginLeft(no: number) : number {
    var count = 1;
    for (let i of this.fretNoMarginLeft) {
      if (no == count) {
        return +i;
      } else {
        count += 1;
      }
    }
  }

}
