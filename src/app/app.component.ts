import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-task';
  form:any="empForm";
  constructor() {  
    
  
  }
  
}
