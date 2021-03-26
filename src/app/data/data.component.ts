
import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {FormService} from '../form.service';





@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() empForm!:FormGroup;

  data!:FormGroup;

  
  today:number=Date.now();

  constructor(private fb:FormBuilder,private fs:FormService)
  {
    
    
  }

  
  get employees(){
    return <FormArray>this.empForm.get('employees');
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      fname:['',Validators.required],
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
    this.employees.push(this.newEmployee());
  }

  removeEmployee(empIndex:number) {
    this.employees.removeAt(empIndex);
  }

  submit()
  {
    this.fs.myMethod(this.empForm);
  }

  ngOnInit():any {
    this.empForm= this.fb.group({
      employees: this.fb.array([this.newEmployee()]),
    })
  }
}



