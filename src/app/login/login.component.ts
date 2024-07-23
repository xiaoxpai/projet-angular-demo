 
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
 
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
     alert(this.favoriteFramework); //2.单击事件业务
  }
 
}

