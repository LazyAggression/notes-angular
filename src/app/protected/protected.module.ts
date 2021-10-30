import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedMainComponent } from './pages/protected-main/protected-main.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateNoteComponent } from './pages/update-note/update-note.component';

@NgModule({
  declarations: [ProtectedMainComponent, NotesComponent, AddNoteComponent, UpdateNoteComponent],
  imports: [CommonModule, ProtectedRoutingModule, ReactiveFormsModule],
})
export class ProtectedModule {}
