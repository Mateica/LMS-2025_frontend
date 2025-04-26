import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Place } from '../../../model/place';
import { CountryService } from '../../../service/country/country.service';
import { Router } from '@angular/router';
import { Country } from '../../../model/country';

@Component({
  selector: 'app-place-form',
  imports: [ReactiveFormsModule],
  templateUrl: './place-form.component.html',
  styleUrl: './place-form.component.css'
})
export class PlaceFormComponent {
  countries : Country[] = [];
  public placeForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      country : new FormControl(null, [Validators.required]),
    });
      
    @Output()
    submitEvent = new EventEmitter<Place>();
      
    constructor(private service : CountryService, private router : Router){}
        
    ngOnInit(): void {
      this.service.getAll().subscribe((r : Country[])=>{
        this.countries = r;
      });
    }
  
    onSubmit() {
      this.submitEvent.emit({...this.placeForm.value as Place});
      }
}
