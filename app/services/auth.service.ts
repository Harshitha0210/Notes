import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APIResponse, IUser} from '../shared/models/user';
import { Observable } from 'rxjs';
import { INote } from '../shared/models/note';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  deleteNote: any;
  getNotes() {
    throw new Error('Method not implemented.');
  }
  private baseUrl:string = "https://localhost:7093/api/User/"
  constructor(private http : HttpClient) { }

  register(userObj: IUser): Observable<APIResponse<IUser>> {
    return this.http.post<APIResponse<IUser>>(`${this.baseUrl}register`, userObj);
  }


  signin(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
}
