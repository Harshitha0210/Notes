import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
// isOpen: any;
@Input() isOpen = false;
@Output() closeModel = new EventEmitter();

onCloseModel() {
this.closeModel.emit(false);
}

}
