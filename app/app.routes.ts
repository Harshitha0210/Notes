import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { NewNoteComponent } from './new-note/new-note.component';


 export const routes: Routes = [
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'signin',
        component:SigninComponent
    },
    {
      path:'forget-password',
      component:ForgetPasswordComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'new-note',
        component:NewNoteComponent
    },
    {
    path: '', redirectTo: 'signup', pathMatch: 'full'
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
