import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';

import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;
  private _notes: Note[] = [];

  get notes() {
    return this._notes;
  }

  getAllNotesOfUser() {
    const url = `${this.baseUrl}/notes`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.get<Note[]>(url, { headers });
  }

  getNote(idNote: number) {
    const url = `${this.baseUrl}/notes/${idNote}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.get<Note>(url, { headers });
  }

  addNote(title: string, content: string) {
    const url = `${this.baseUrl}/notes`;
    const body = { title, content };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.post<Note>(url, body, { headers });
  }

  updateNote(idNote: number, title: string, content: string) {
    const url = `${this.baseUrl}/notes/${idNote}`;
    const body = { title, content };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.patch<Note>(url, body, { headers });
  }

  deleteNote(idNote: number) {
    const url = `${this.baseUrl}/notes/${idNote}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.delete<Note>(url, { headers });
  }
}
