import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';




@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

    empForm!:FormGroup;

    test!:any;

  constructor(private fb: FormBuilder) { 
    this.empForm=this.fb.group({
      employees: this.fb.array([]),
    })
  }

  employees():FormArray{
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup{
    return this.fb.group({
      fname:'',
      lname:'',
      user:'',
      email:'',
      password:'',
      cpassword:'',
      date:'',
      gender:'',
      phone:'',
      address:this.fb.group({
        street:'',
        city:'',
        state:'',
        zip:''
      })
    });
  }

  addEmployee(){
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex:number)
  {
    this.employees().removeAt(empIndex);
  }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    console.log(this.empForm.value);
  }

  

}
