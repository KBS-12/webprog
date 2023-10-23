import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './home-page/homepage.component';
import { ProfileComponent } from './profile-page/profile.component';
import { LoginpageComponent } from './login-page/loginpage.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProfileComponent,
    LoginpageComponent,
    SearchPageComponent,
    RecipePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
