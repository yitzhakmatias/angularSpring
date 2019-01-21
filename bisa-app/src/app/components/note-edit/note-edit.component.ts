import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NoteServiceService} from "../../services/note-service.service";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  noteForm: FormGroup;
  validMessage: string = "";

  constructor(private  service: NoteServiceService, private route: ActivatedRoute, private router: Router) {
    //console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.noteForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
      registeredDate: new FormControl('', Validators.required),
    });
    this.route.paramMap.subscribe(p => {
      const id = +p.get('id');
      // console.log(p);
      if (id != 0)
        this.getNoteById(id);
    });


  }

  getNoteById(id) {
    this.service.getNote(id).subscribe(data => {
        this.noteForm.setValue(data);
      },
      error => {
        return Observable.throw(error)
      });
  }

  submitRegistration() {
    if (this.noteForm.valid) {

      this.validMessage = "Submited";
      this.service.createNoteRegistration(this.noteForm.value).subscribe(
        data => {
          this.noteForm.reset();
          this.router.navigate(['']);
        },
        error => {
          return Observable.throw(error)
        },
      );
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
    return;
  }

  deleteNote() {

    if (confirm(`Really delete the note: ${this.noteForm.get('name').value}?`)) {
      this.service.delete(this.noteForm.get('id').value).subscribe(data => {
        const msg = data;
        this.router.navigate(['']);
      }, error => {
        return Observable.throw(error)
      });
    }

  }
}
