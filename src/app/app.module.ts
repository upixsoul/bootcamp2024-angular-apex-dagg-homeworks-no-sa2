import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Number1Module } from './number1/number1.module';
import { Number2Module } from './number2/number2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Number1Module,
    Number2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
