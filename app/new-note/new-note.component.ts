import { Component,EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {FormBuilder, ReactiveFormsModule,FormControl, Validators, FormGroup} from '@angular/forms';
import { response } from 'express';
import { Router } from '@angular/router';
import { INote } from '../shared/models/note';
import { noteService } from '../services/note.service';
import { ModelComponent } from '../model/model.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnyARecord } from 'dns';



@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css'
})
export class NewNoteComponent implements OnChanges{
  @Input() data: INote | null=null;
  @Output() onCloseModel= new EventEmitter();
  NewNoteForm !: FormGroup ;
  

  constructor(private fb: FormBuilder,
     private notes: noteService,private router:Router){}
  
      ngOnInit(): void {
        this.NewNoteForm = this.fb.group({
      title: new FormControl('',[Validators.required]),
      // : new FormControl('',[Validators.required]),
      note: new FormControl('',[Validators.required]),
      // email: new FormControl('',[Validators.required])

    });

    }
    ngOnChanges(): void {
      if(this.data){
        this.NewNoteForm.patchValue({
          title:this.data?.title,
          note:this.data?.note,
          // link:this.data?.link,
          // email:this.data?.email
   
         
        });
      }
    }
      
    
  
  onClose(){
     this.onCloseModel.emit(false);
  }


  onSubmit(){
    if(this.NewNoteForm.valid){
      const appObj = {
        title: this.NewNoteForm.value.title,
        note: this.NewNoteForm.value.note,
        // email: this.NewNoteForm.value.email
        
      };
      
   
      
      if (this.data) {
             
              this.notes
                .updateNote(this.data.notesId as any, this.NewNoteForm.value)
                .subscribe({
                  next: (response:any) => {
                    this.resetnoteForm();
                   
                  },
                });
              }
           
        else{
          this.notes.AddNote(appObj)
          .subscribe({
            next: (res) => {
              alert(res.message);
              this.router.navigateByUrl('/home');  
            },
            error: (err: { error: { message: any; }; }) => {
              alert(err?.error.message);
            }
          });   
}
    }
}
resetnoteForm() {
  this.NewNoteForm.reset();
  this.onClose();
}

}







  

