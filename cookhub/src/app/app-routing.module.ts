import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './home-page/homepage.component';
import { LoginpageComponent } from './login-page/loginpage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfileComponent } from './profile-page/profile.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AuthGuard } from './guard/auth.guard';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';

import { NewRecipeDatatableComponent } from './new-recipe-datatable/new-recipe-datatable.component';


const routes: Routes = [
 {component:LoginpageComponent,path:'login-page'},
 {component:RegisterPageComponent,path:'register-page'},
 {component:HomepageComponent, path:'home-page'},
 {component:ProfileComponent, path:'profile-page'},
 {component:RecipePageComponent,path:'recipe-page'},
 {component:SearchPageComponent,path:'search-page'},

 {component:NewRecipePageComponent,path:'new-recipe-page'},
 {component:NewRecipeDatatableComponent,path:'new-recipe-datatable'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }