import { Routes,RouterModule  } from '@angular/router'; //1.
import { LoginComponent } from './login/login.component'; //1.1
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
 
export const routes: Routes = [
     
   
    {
        path: "",
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

 
export class RouteConfig{}