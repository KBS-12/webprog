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
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
 {path: '', redirectTo: 'home-page', pathMatch: 'full' }, //default route
 {component:LoginpageComponent,path:'login-page'},
 {component:RegisterPageComponent,path:'register-page'},
 {component:HomepageComponent, path:'home-page'},
 {component:ProfileComponent, path:'profile-page'},
 {component:RecipePageComponent,path:'recipe-page'},
 {component:SearchPageComponent,path:'search-page'},
 {component:NewRecipePageComponent, path:'new-recipe-page'},
 {component:SearchPageComponent, path:'search/:searchTerm'},
 {component:SearchPageComponent, path:'tag/:tag'},
 {component:FoodPageComponent, path: 'food/:id'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }