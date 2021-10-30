import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.sass'],
})
export class AddNoteComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notesService: NotesService
  ) {}

  addNoteForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  onSubmit() {
    const { title, content } = this.addNoteForm.value;
    this.notesService.addNote(title, content).subscribe((resp) => {
      this.router.navigateByUrl('/notes');
    });
  }
}
