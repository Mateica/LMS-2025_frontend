import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Student } from '../../model/student';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends GenericService<Student>{
  constructor(http : HttpClient) {
    super(http, "/students");
  }

  searchStudents(params : any){
    if(params === undefined){
      return super.getAll();
    }else{
      return super.getAll().pipe(
        map(r =>{
          return r.filter(s=>{
            let result = true;
            if(s["id"] && params["id"]){
              result &&= s["id"] && params["id"];
            }

            return result;
          });
        }));
    }
  }
}
