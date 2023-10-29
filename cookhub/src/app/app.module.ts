import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './home-page/homepage.component';
import { ProfileComponent } from './profile-page/profile.component';
import { LoginpageComponent } from './login-page/loginpage.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NewRecipePageComponent } from './new-recipe-page/new-recipe-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProfileComponent,
    LoginpageComponent,
    SearchPageComponent,
    RecipePageComponent,
    RegisterPageComponent,
    NewRecipePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
