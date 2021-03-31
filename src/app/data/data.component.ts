import { Component, OnInit,Input,SimpleChanges,OnChanges} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  
})
export class DataComponent implements OnInit,OnChanges {
  
  @Input() empForm!:FormGroup;

  @Output() empForm1=new EventEmitter<string>();

  @Output() dataForm=new EventEmitter<FormGroup>();

  //dataForm!:FormGroup;
  
  additem(value:string)
  {
    this.empForm1.emit(value);
  }

  constructor()
  {
    
  }

  display()
  {
    console.log(this.empForm);
  }

  ngOnInit()
  {
    //console.log(this.empForm.value);
  }


  ngOnChanges(changes: SimpleChanges)
  {
     console.log(changes.empForm);
    
  }
}




