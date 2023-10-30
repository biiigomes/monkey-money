import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasPageComponent } from './ideas-page.component';
import { AppModule } from 'src/app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/shared/header/header.module';


@NgModule({
  declarations: [IdeasPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  exports: [IdeasPageComponent]
})
export class IdeasPageModule { }
