import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  students=[
    {id:"101",name:"Alex",description:"Alex Details",email:"alex@xyz.com"},
    {id:"151",name:"Abdulla",description:"Abdulla Details",email:"Abdulla@xyz.com"},
    {id:"201",name:"Mario",description:"Mario Details",email:"Mario@xyz.com"},
    {id:"111",name:"Martin",description:"Martin Details",email:"Martin@xyz.com"},
    {id:"301",name:"Kalex",description:"Kalex Details",email:"alex@xyz.com"},
  ]

  constructor() { }
  // <{id,name,description,email}>
public getStudents():any{
return this.students;
}
public createStudent(students:{id,name,description,email}){

this.students.push(students);
console.table(students);
}

}
