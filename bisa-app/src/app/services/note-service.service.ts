import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http: HttpClient) {

  }

  getNotes() {
    return this.http.get('/server/api/v1/notes');
  }

  getNote(id: number) {
    /*if (id==0){
      return of(this.initializeNote());
    }*/
    return this.http.get('/server/api/v1/notes/' + id);
  }

  createNoteRegistration(note) {
    let body = JSON.stringify(note);
    return this.http.post('/server/api/v1/notes', body, httpOptions);
  }

  delete(id) {
    return this.http.delete('/server/api/v1/notes/' + id)
  }
}
