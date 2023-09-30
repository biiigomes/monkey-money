import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeasPageModule } from './view/ideas-page/ideas-page.module';
import { MainPageModule } from './view/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    IdeasPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
