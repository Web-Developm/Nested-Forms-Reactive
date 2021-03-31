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

  @Output() dataForm = new EventEmitter<FormGroup>();

  data!:FormGroup;
  

  constructor(private fb:FormBuilder)
  {
    /*this.dataForm=this.fb.group({
      blood :new FormControl('')
    }) */
  }

  



  add(value:FormGroup)
  {
    this.dataForm.emit(value);
    
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




