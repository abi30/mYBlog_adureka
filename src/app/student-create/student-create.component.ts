import {HomeServiceService} from '../home-service.service'
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {


  student:{id:number,name,description,email}={id:null,name:"",description:"",email:""}
  

  

  constructor(public homeService:HomeServiceService) { }

  ngOnInit(): void {

  }
 







  creatNewStudent(){
    console.log(this.student);
    this.homeService.createStudent(this.student);
    this.student={id:null,name:"",description:"",email:""};
    console.log(this.homeService.students)
  }

}
