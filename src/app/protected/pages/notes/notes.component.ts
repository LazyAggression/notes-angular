import { Component, OnInit } from '@angular/core';
import { Note } from '../../interfaces/note.interface';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteService.getAllNotesOfUser().subscribe((notes) => {
      this.notes = notes;
    });
  }

  deleteNote(note_id: number) {
    this.noteService.deleteNote(note_id).subscribe((notes) => {
      this.getAllNotes();
    });
  }
}
