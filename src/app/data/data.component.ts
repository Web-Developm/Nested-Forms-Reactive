import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormService } from '../form.service';




@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  

  @Input()item!:string;

  today:number=Date.now();

  test!: any;

  constructor(private fb: FormBuilder, private formService: FormService) {  
  }

  empForm = this.fb.group({
    employees: this.fb.array([]),
  })

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      fname: '',
      lname: '',
      user: '',
      email: '',
      password: '',
      cpassword: '',
      date: '',
      gender: '',
      phone: '',
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  result = [];

  

  ngOnInit():any {
    this.result = this.formService.getDisplay();
    this.formService.getMessage();

    
  }




}
