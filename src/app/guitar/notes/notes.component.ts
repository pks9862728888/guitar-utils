import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  // Guitar notes on frets
  private Elow = 'FOGOAOBCODOEFOGOAOBCOD';
  private B = 'CODOEFOGOAOBCODOEFOGOA';
  private G = 'OAOBCODOEFOGOAOBCODOEF';
  private D = 'OEFOGOAOBCODOEFOGOAOBC';
  private A = 'OBCODOEFOGOAOBCODOEFOG';
  private Ehigh = 'FOGOAOBCODOEFOGOAOBCOD';

  // Overlay color for various notes
  private AOverlayColor = 'rgba(255, 198, 0, 1)';
  private BOverlayColor = 'rgba(152, 116, 243, 1)';
  private COverlayColor = 'rgba(0, 196, 253, 1)';
  private DOverlayColor = 'rgba(250, 31, 109, 1)';
  private EOverlayColor = 'rgba(24, 0, 255, 1)';
  private FOverlayColor = 'rgba(66, 253, 0, 1)';
  private GOverlayColor = 'rgba(216, 0, 255, 1)';
  private HiddenColor = 'rgba(255, 255, 255, 0)';

  filteredNotes: string[][];
  note: string;

  constructor() { }

  ngOnInit(): void {
    this.filterNotes('*');
  }

  filterNotes(filter: string) {
    var notes: string[][] = [];
    notes.push(this.getSplittedNotes(this.Elow, filter));
    notes.push(this.getSplittedNotes(this.B, filter));
    notes.push(this.getSplittedNotes(this.G, filter));
    notes.push(this.getSplittedNotes(this.D, filter));
    notes.push(this.getSplittedNotes(this.A, filter));
    notes.push(this.getSplittedNotes(this.Ehigh, filter));

    this.note = filter;
    this.filteredNotes = notes;
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

  getOverlayColor(note: string): string {
    if (note === 'A') {
      return this.AOverlayColor;
    } else if (note === 'B') {
      return this.BOverlayColor;
    } else if (note === 'C') {
      return this.COverlayColor;
    } else if (note === 'D') {
      return this.DOverlayColor;
    } else if (note === 'E') {
      return this.EOverlayColor;
    } else if (note === 'F') {
      return this.FOverlayColor;
    } else if (note === 'G') {
      return this.GOverlayColor;
    } else {
      return this.HiddenColor;
    }
  }

}
