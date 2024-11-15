import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse,INote } from '../shared/models/note'; // Import your expense model
 
@Injectable({ providedIn: 'root' })
export class noteService {

  private apiUrl = 'https://localhost:7093/api/'; // Replace with actual URL
 
  constructor(private http: HttpClient) {}
 
  AddNote(appObj: INote): Observable<APIResponse<INote>> {
    return this.http.post<APIResponse<INote>>(`${this.apiUrl}Notes`, appObj)
  }
  GetAllNotes(): Observable<APIResponse<INote[]>> {
    return this.http.get<APIResponse<INote[]>>(`${this.apiUrl}Notes/AddNote`);
  }
  getNotes(NotesId?:any):Observable<APIResponse<INote>> {
    return this.http.get<APIResponse<INote>>(`${this.apiUrl}/${NotesId}AddNote`);
  }
  DeleteNote(id: any): Observable<APIResponse<any>> {
  return this.http.delete<APIResponse<any>>(`${this.apiUrl}Notes/${id}`);
  }
  updateNote(id: any, updatedNote: INote) {
  return this.http.put<APIResponse<INote>>(`${this.apiUrl}Notes/${id}`,updatedNote);
  }
}
 
 
  
