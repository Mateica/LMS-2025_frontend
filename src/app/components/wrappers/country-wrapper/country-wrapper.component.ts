import { Component, Input } from '@angular/core';
import { CountryFormComponent } from "../../forms/country-form/country-form.component";
import { CountryTableComponent } from "../../tables/country-table/country-table.component";
import { Country } from '../../../model/country';
import { CountryService } from '../../../service/country/country.service';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country-wrapper',
  imports: [CountryFormComponent, CountryTableComponent],
  templateUrl: './country-wrapper.component.html',
  styleUrl: './country-wrapper.component.css'
})
export class CountryWrapperComponent {
  country : Country = {name:''};

  countries : Country[] = [];

  constructor(private service : CountryService, private router : Router, private toaster : ToastrService){}

  getAll(){
    this.service.getAll().subscribe((r : Country[])=>{
      this.countries = r;
    });
  }

  createCountry(t : Country){
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

  setCountry(t : Country){
    this.country = {name : ''};
  }

  deleteCountry(t : Country){
    if(t.id !== undefined){
      this.service.softDelete(t.id).subscribe(()=>{
        this.getAll();
      })
    }else{
      this.toaster.error("Error deleting country!");
    }
  }
    
}
