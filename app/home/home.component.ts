import { Component,OnInit,TrackByFunction} from '@angular/core';
import { noteService } from '../services/note.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelComponent } from '../model/model.component';
import { NewNoteComponent } from "../new-note/new-note.component";
import { INote } from '../shared/models/note';
import { Response } from 'express';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

 

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ModelComponent, ReactiveFormsModule,NewNoteComponent,CommonModule,NgForOf]
})
export class HomeComponent implements OnInit {
  isModelOpen = false;

  Notess!:INote;
  Notes:INote[] =[];
  selectedNote:any;
  isOpen:boolean|undefined;
item: any;
  public confirmdel(){
    if(confirm("Are you sure You want to delete")){
      console.log("Delete confirmed");
    }
  }
constructor(private noteServices:noteService){}

ngOnInit(): void {
  this.getNotes();
}
getNotes(){
  this.noteServices.GetAllNotes().subscribe(
     (response:any)=>{
      this.Notes = response;
    },
  );
}
deleteNote(id: any){
  if(confirm("Are you sure you want to delete")){
    this.noteServices.DeleteNote(id).subscribe({
     next:(response:any)=>{
       this.Notes=response;
       alert("Note Deleted");
       this.getNotes();
     }
     });
    }
}

loadNote(data:INote){
  this.Notess=data;
  this.openModel();
}
  openModel() {
    this.isModelOpen =true;
  }
  closeModel(){
    this.isModelOpen = false;
    this.getNotes();
  }
  openEditModal(id: number){
    this.selectedNote = id;
    this.isOpen = true;
  }
}


