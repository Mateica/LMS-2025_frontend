import { Component } from '@angular/core';
import { Place } from '../../../model/place';
import { PlaceService } from '../../../service/place/place.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlaceFormComponent } from "../../forms/place-form/place-form.component";
import { PlaceTableComponent } from "../../tables/place-table/place-table.component";

@Component({
  selector: 'app-place-wrapper',
  imports: [PlaceFormComponent, PlaceTableComponent],
  templateUrl: './place-wrapper.component.html',
  styleUrl: './place-wrapper.component.css'
})
export class PlaceWrapperComponent {
  place : Place = {name:''};
  
  places : Place[] = [];
  
    constructor(private service : PlaceService, private router : Router, private toaster : ToastrService){}
  
    getAll(){
      this.service.getAll().subscribe((r : Place[])=>{
        this.places = r;
      });
    }
  
    createPlace(t : Place){
      if(t.id !== undefined){
        this.service.update(t.id, t).subscribe(()=>{
          this.getAll();
        })
      }else{
        this.service.create(t).subscribe(()=>{
          this.getAll();
        })
      }
    }
  
    setPlace(t : Place){
      this.place = {name : ''};
    }
  
    deletePlace(t : Place){
      if(t.id !== undefined){
        this.service.delete(t.id).subscribe(()=>{
          this.getAll();
        })
      }else{
        this.toaster.error("Error deleting place!");
      }
    }
}
