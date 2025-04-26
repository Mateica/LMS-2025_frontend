import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Place } from '../../../model/place';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Country } from '../../../model/country';
import { PlaceService } from '../../../service/place/place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-form',
  imports: [ReactiveFormsModule],
  templateUrl: './country-form.component.html',
  styleUrl: './country-form.component.css'
})
export class CountryFormComponent {
  places : Place[] = [];

    @Input()
    public countryForm = new FormGroup({
        name : new FormControl('',[Validators.required]),
      });
        
      @Output()
      submitEvent = new EventEmitter<Country>();
        
      constructor(private service : PlaceService, private router : Router){}
          
      ngOnInit(): void {
        this.service.getAll().subscribe((r : Place[])=>{
          this.places = r;
        });
      }
    
      onSubmit() {
        this.submitEvent.emit({...this.countryForm.value as Country});
        }
}
