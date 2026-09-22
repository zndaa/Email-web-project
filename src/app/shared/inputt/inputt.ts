import { Component,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inputt',
  imports: [ReactiveFormsModule,CommonModule],
  standalone: true,
  templateUrl:'./inputt.html',
  styleUrl: './inputt.css',
})
export class Inputt {

@Input() label! :string;
@Input() control!:FormControl;
@Input() inputType!:string;
@Input() controlType= 'input';

showErrors(){
if (!this.control) {
    return false;
  }
const{  dirty,touched,errors }=this.control;
return dirty&&touched&&errors;

}

}
