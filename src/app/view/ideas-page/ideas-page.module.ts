import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasPageComponent } from './ideas-page.component';
import { AppModule } from 'src/app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [IdeasPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [IdeasPageComponent]
})
export class IdeasPageModule { }
