import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard/fretboard.component';
import { GreyCircleComponent } from './grey-circle/grey-circle.component';
import { NoteComponent } from './note/note.component';



@NgModule({
  declarations: [FretboardComponent, GreyCircleComponent, NoteComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FretboardComponent,
    NoteComponent
  ]
})
export class SharedModule { }
