import { Injectable,OnInit,Input } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import {Observable,of, Subject} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class FormService {
  myMethod$: Observable<any>;
  private myMethodSubject=new  Subject<any>();


  
  constructor() {
  this.myMethod$ =this.myMethodSubject.asObservable(); 
  }

  myMethod(data:any)
  {
    console.log(data.value);

  }


  
  

 
  

  

  

 
  

  ngOnInit():void{
    
  }
  


  


  
  
  

  

  

 
  
  
}
