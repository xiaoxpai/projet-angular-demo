import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl, FormGroup} from '@angular/forms'; //1.

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //2.
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
   });
  
  handleSubmit() { //3.写一个提交事件业务
    console.log('注册成功！等待主管审核（预计1-7天内答复，请注意邮箱查收通知）')
  alert(
    this.profileForm.value.name + ' | ' + this.profileForm.value.email
  );
}
}
