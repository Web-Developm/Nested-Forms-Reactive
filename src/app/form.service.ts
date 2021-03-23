import { Injectable } from '@angular/core';
import {Data} from './data/data.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {
   
  constructor() { }

  display=():void =>{
    console.log("hello");
  }

  
}
