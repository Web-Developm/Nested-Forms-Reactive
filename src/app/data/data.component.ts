import { Component, OnInit,Input,Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  
})
export class DataComponent implements OnInit {
  
  @Input() empForm!:FormGroup;

  
  
  constructor()
  {
    
  }

  
  ngOnInit():any {
    console.log(this.empForm.value);
  }
}



