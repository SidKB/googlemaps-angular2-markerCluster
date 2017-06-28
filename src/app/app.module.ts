import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

//agm core 
import { AgmCoreModule } from '@agm/core';
import { MarkerClusterDirective } from './marker-cluster';


@NgModule({
  declarations: [
    MarkerClusterDirective,
    AppComponent
  ],
  imports: [
    
    HttpModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      region: "de",
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
