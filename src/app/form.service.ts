import { Injectable } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  empForm!: FormGroup;

  baseurl:string="https://jsonplaceholder.typicode.com/posts";


  constructor() {
  }

  list = ["abc", "def"];

  getDisplay(): any {
    return this.list;
  }

  getMessage()
  {
    console.log("Welcome Type Script");
  }

  hello=():void =>{
    console.log("Welcome");
  }

  









}
