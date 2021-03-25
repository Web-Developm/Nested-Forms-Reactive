import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  
  today:number=Date.now();

  

  @Input() empForm!:FormGroup;
  
  constructor(private fb:FormBuilder)
  {
   
  }
  ngOnInit():any {
    this.empForm= this.fb.group({
      employees: this.fb.array([]),
    })
  }

  ngOnChanges():any{

  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      fname:[''],
      lname:[''],
      user: [''],
      email: [''],
      password: [''],
      cpassword: [''],
      date: [''],
      gender: [''],
      phone: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }


  
  
  addEmployee() {
    this.employees().push(this.newEmployee());
    
  }

  

  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }

  visible=false;

  display=():void =>{  
    alert("Successfully Submitted");
    console.log(this.employees().value);
  }


  result = [];
  



}
