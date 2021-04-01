import { Component, OnInit,Input,SimpleChanges,OnChanges,Output} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  
})
export class DataComponent implements OnInit,OnChanges {
  
  @Input() empForm!:FormGroup;

  @Output() dataForm = new EventEmitter<any>();

  data=new FormGroup({
    blood:new FormControl('')
  });



  group=[
    {value:'O+',viewValue:'O+'},
    {value:"O-", viewValue:'O-'},
    {value:'A+', viewValue:'A+'},
    {value:'A-', viewValue:'A-'},
    {value:'B+', viewValue:'B+'},
    {value:'B-', viewValue:'B-'}
  ];



  change(event:any)
  {
    if(event.isUserInput)
    {
      console.log(event.source.value, event.source.selected);
    }
  }
  

  constructor(private fb:FormBuilder)
  {
  }
  

  display()
  {
    console.log(this.empForm);
  }

  ngOnInit()
  {

  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log(changes.empForm);
    this.dataForm.emit(this.data);

     
  }
}




