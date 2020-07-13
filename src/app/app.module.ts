import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { MarkerListComponent } from './marker-list/marker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_api_key
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
