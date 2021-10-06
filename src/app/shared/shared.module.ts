import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard/fretboard.component';
import { GreyCircleComponent } from './grey-circle/grey-circle.component';



@NgModule({
  declarations: [FretboardComponent, GreyCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FretboardComponent
  ]
})
export class SharedModule { }
