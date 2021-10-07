import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private Elow = 'FOGOAOBCODOEFOGOAOBCOD';
  private B = 'CODOEFOGOAOBCODOEFOGOA';
  private G = 'OAOBCODOEFOGOAOBCODOEF';
  private D = 'OEFOGOAOBCODOEFOGOAOBC';
  private A = 'OBCODOEFOGOAOBCODOEFOG';
  private Ehigh = 'FOGOAOBCODOEFOGOAOBCOD';

  filteredNotes: string[][];

  constructor() { }

  ngOnInit(): void {
    this.filteredNotes = this.filterNotes('*');
  }

  filterNotes(filter: string): string[][]{
    var notes: string[][] = [];
    notes.push(this.getSplittedNotes(this.Elow, filter));
    notes.push(this.getSplittedNotes(this.B, filter));
    notes.push(this.getSplittedNotes(this.G, filter));
    notes.push(this.getSplittedNotes(this.D, filter));
    notes.push(this.getSplittedNotes(this.A, filter));
    notes.push(this.getSplittedNotes(this.Ehigh, filter));

    console.log(notes);
    return notes;
  }

  getSplittedNotes(notes: string, filter: string): string[] {
    var splittedNotes: string[] = [];
    for (var i = 0; i < notes.length; i++) {
      var ch = notes.charAt(i);
      if (filter === '*' || filter === ch) {
        splittedNotes.push(ch);
      } else {
        splittedNotes.push('O');
      }
    }
    return splittedNotes;
  }

}
