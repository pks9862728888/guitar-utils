import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard/fretboard.component';



@NgModule({
  declarations: [FretboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FretboardComponent
  ]
})
export class SharedModule { }
