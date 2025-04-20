import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Address } from '../../../model/address';
import { Router } from '@angular/router';
import { CountryService } from '../../../service/country/country.service';
import { PlaceService } from '../../../service/place/place.service';
import { Place } from '../../../model/place';

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent implements OnInit {
  places : Place[] = [];
  public addressForm = new FormGroup({
        street : new FormControl('',[Validators.required]),
        houseNumber : new FormControl(0, [Validators.required]),
        place : new FormControl(this.places[0], [Validators.required]),
      });
    
      @Output()
      submitEvent = new EventEmitter<Address>();
    
      constructor(private service : PlaceService, private router : Router){}
      
      ngOnInit(): void {
        this.service.getAll().subscribe((r : Place[])=>{
          this.places = r;
        });
      }

      onSubmit() {
        this.submitEvent.emit({...this.addressForm.value as Address});
      }
}
