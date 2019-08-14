import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FizzBuzzParamComponent } from './fizz-buzz-param/fizz-buzz-param.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzParamComponent,
    FizzBuzzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
