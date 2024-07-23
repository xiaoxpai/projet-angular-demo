import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
imports: [HomeComponent,RouterModule]

 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'PAD PRO';
}
