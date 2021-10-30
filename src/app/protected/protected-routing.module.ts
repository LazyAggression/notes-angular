import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedMainComponent } from './pages/protected-main/protected-main.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { UpdateNoteComponent } from './pages/update-note/update-note.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedMainComponent,
    children: [
      {
        path: 'add',
        component: AddNoteComponent,
      },
      {
        path: 'update/:note_id',
        component: UpdateNoteComponent,
      },
      {
        path: '',
        component: NotesComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
