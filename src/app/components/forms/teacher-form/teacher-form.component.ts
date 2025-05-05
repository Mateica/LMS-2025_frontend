import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Teacher } from '../../../model/teacher';
import { TeachingMaterial } from '../../../model/teaching-material';
import { Department } from '../../../model/department';
import { TeacherService } from '../../../service/teacher/teacher.service';
import { RegisteredUserService } from '../../../service/registered-user/registered-user.service';
import { RoleService } from '../../../service/role/role.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleService } from '../../../service/title/title.service';
import { TeachingMaterialService } from '../../../service/teaching-material/teaching-material.service';
import { DepartmentService } from '../../../service/department/department.service';
import { Title } from '../../../model/title';

@Component({
  selector: 'app-teacher-form',
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent implements OnInit {
    @Input()
    teacher : Teacher | null = null;
  
    titles : Title[] = [];

    teachingMaterial : TeachingMaterial[] = [];

    departments : Department[] = [];
  
    @Output()
    submitEvent = new EventEmitter<Teacher>();
  
    teacherForm  = new FormGroup({
      username : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      firstName : new FormControl('',[Validators.required]),
	    lastName : new FormControl('',[Validators.required]),
	    umcn : new FormControl('',[Validators.required,Validators.pattern('^[0-9]{13}$')]),
	    biography : new FormControl('',[Validators.required]),
	    titles : new FormControl([]),
	    teachingMaterial : new FormControl(''),
	    department : new FormControl('',[Validators.required])
      
    });
  
    constructor(private service : TeacherService, private userService : RegisteredUserService, private titleService : TitleService, private teachingMaterialService : TeachingMaterialService,
      private departmentService : DepartmentService, private roleService : RoleService, private router : Router, private toaster : ToastrService){}
  
    ngOnInit(): void {
      this.titleService.getAll().subscribe(r=>{
        this.titles = r;
      });

      this.teachingMaterialService.getAll().subscribe(r =>{
        this.teachingMaterial = r;  
      })

      this.departmentService.getAll().subscribe(r=>{
        this.departments = r;
      });
    }
  
    onSubmit(){
      if(this.teacherForm.valid){
        this.submitEvent.emit({...this.teacherForm.value }  as Teacher);
      }
    }
}
