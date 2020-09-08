import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { warningComponent } from './warning/warning.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    warningComponent,
    SucessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
