import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './home-page/homepage.component';
import { LoginpageComponent } from './login-page/loginpage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfileComponent } from './profile-page/profile.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
 {component:LoginpageComponent,path:'login-page'},
 {component:RegisterPageComponent,path:'register-page'},
 {component:HomepageComponent,path:'home-page'},
 {component:ProfileComponent,path:'profile-page'},
 {component:RecipePageComponent,path:'receipt-page'},
 {component:SearchPageComponent,path:'search-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }