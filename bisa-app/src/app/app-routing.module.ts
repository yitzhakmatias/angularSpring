import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoteEditComponent} from "./components/note-edit/note-edit.component";
import {NoteListComponent} from "./components/note-list/note-list.component";


const routes: Routes = [
  {path: '', component: NoteListComponent},
  {path: 'note', component: NoteEditComponent},
  {path: 'note/:id', component: NoteEditComponent},
  {path: 'note/:id/edit', component: NoteEditComponent},
  {path: 'note/:id/add', component: NoteEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
