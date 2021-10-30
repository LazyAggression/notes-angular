import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../interfaces/note.interface';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.sass'],
})
export class UpdateNoteComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private noteService: NotesService,
    private fb: FormBuilder
  ) {}

  note!: Note;
  note_id!: number;
  updateNoteForm = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.note_id = this.activatedRoute.snapshot.queryParams['note_id'];
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.note_id = Number(paramMap.get('note_id'));
      this.noteService.getNote(this.note_id).subscribe((note) => {
        this.note = note;
        this.updateNoteForm.patchValue({
          title: note.title,
          content: note.content,
        });
      });
    });
  }

  onSubmit() {
    const { title, content } = this.updateNoteForm.value;
    this.noteService
      .updateNote(this.note_id, title, content)
      .subscribe((resp) => {
        this.router.navigateByUrl('/notes');
      });
  }
}
