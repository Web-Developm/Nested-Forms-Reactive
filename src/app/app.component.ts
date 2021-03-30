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

  loading=true;

  
  
  constructor(private fb:FormBuilder, private fs:FormService) {  
    
  }

  get employees(){
    return <FormArray>this.empForm.get('employees');
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      user:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      cpassword: ['',Validators.required],
      date: ['',Validators.required],
      gender: ['',Validators.required],
      phone: ['',Validators.required],
      address: this.fb.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        zip: ['',Validators.required]
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

    this.loading=false;
  }

  ngAfterViewInit()
  {

    this.loading=false;
  }
  
}
