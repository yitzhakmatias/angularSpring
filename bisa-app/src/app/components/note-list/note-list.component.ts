import { Component, OnInit } from '@angular/core';

import {NoteServiceService} from "../../services/note-service.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public notes;

  constructor(private service: NoteServiceService) {
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.service.getNotes().subscribe(
      data => {
        this.notes = data;
      }, err => console.error(err),
      () => console.log('notes loaded')
    );
  }

}
