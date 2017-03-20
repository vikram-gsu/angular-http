import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routeConfig } from './app.routing'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { NotFoundComponent } from './not-found/notfound.component'


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routeConfig
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}