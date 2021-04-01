import { Component, SimpleChanges} from '@angular/core';
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

  formCheck:any='';


  constructor(private fb:FormBuilder, private fs:FormService) {

  }

  public onFormGroupChangeEvent(_event:any)
  {
    this.formCheck=_event;
    console.log(_event,this.formCheck['controls']);
  }

  value:any;


  public submit(_event:any)
  {
    this.value=_event;

    console.log(this.value); // data Form,  child to parent

    this.empForm.value.sample=this.value;

    console.log(this.empForm.value); // EmpForm and DataForm, child to parent



    //this.formCheck=_event;
    //console.log(_event,this.formCheck['controls']);
  }







  get employees(){
    return <FormArray>this.empForm.get('employees');
  }

  newEmployee(): FormGroup {

    return this.fb.group({
      fname:["",Validators.required],
      lname:["",Validators.required],
      user:["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
      cpassword: ["",Validators.required],
      date: ["",Validators.required],
      gender: ["",Validators.required],
      phone: ["",Validators.required],
      address: this.fb.group({
        street: ["",Validators.required],
        city: ["",Validators.required],
        state: ["",Validators.required],
        zip: ["",Validators.required]
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




  ngOnInit()
  {
    this.empForm= this.fb.group({
      employees: this.fb.array([this.newEmployee()]),
    })

  }





  display()
  {
    console.log(this.empForm);
    console.log(this.fs.myMethod(this.empForm));
  }



  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes.formCheck);

  }



}
