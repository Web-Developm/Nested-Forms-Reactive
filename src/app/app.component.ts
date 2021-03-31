import { Component,Input } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,FormArray,Validators } from '@angular/forms';
import {FormService} from "./form.service";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FormService]
})
export class AppComponent {
  title = 'reactive-task';
  
  empForm!:FormGroup;

  today:number=Date.now();

  constructor(private fb:FormBuilder, private fs:FormService) {  
    
  }

  get employees(){
    return <FormArray>this.empForm.get('employees');
  }

  newEmployee(): FormGroup {

    return this.fb.group({
      fname:[null,Validators.required],
      lname:[null,Validators.required],
      user:[null,Validators.required],
      email: [null,Validators.required],
      password: [null,Validators.required],
      cpassword: [null,Validators.required],
      date: [null,Validators.required],
      gender: [null,Validators.required],
      phone: [null,Validators.required],
      address: this.fb.group({
        street: [null,Validators.required],
        city: [null,Validators.required],
        state: [null,Validators.required],
        zip: [null,Validators.required]
      }),
      
    });
  }



 
  addEmployee() {
    this.employees.push(this.newEmployee());
  }

  removeEmployee(empIndex:number) {
    this.employees.removeAt(empIndex);
  }

  refresh=():any=>
  {
    this.employees.reset();
  }

 
  submit()
  {
    this.fs.myMethod(this.empForm);
    this.refresh();
  }

  ngOnInit()
  {
    this.empForm= this.fb.group({
      employees: this.fb.array([this.newEmployee()]),
    })

  }

 
  
}
