import { Component,inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from '@angular/common';


import { HousingService } from '../housing-location/housing.service';
import { Housinglocation } from '../housing-location/housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent   {
  //   ngOnInit() {
  //   console.log('housingLocation1:', this.housingLocation);
  // }
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
//import {Component, inject} from '@angular/core';
 