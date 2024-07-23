import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Housinglocation} from './housinglocation';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './housing-location.component.html', 
  styleUrl: './housing-location.component.css'
})
// //OnInit 生命周期函数  作为问题排查的代码片段
// export class HousingLocationComponent  implements OnInit {
//   @Input() housingLocation!: Housinglocation;

//   ngOnInit() {
//     console.log('housingLocation1:', this.housingLocation);
//   }

  
// }
 
export class HousingLocationComponent   {
  @Input() housingLocation!: Housinglocation; 

}