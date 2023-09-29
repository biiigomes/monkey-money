import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { MainPageModule } from './view/main-page/main-page.module';
import { IdeasPageComponent } from './view/ideas-page/ideas-page.component';
import { IdeasPageModule } from './view/ideas-page/ideas-page.module';

@NgModule({
  declarations: [
    AppComponent,
    IdeasPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    IdeasPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
