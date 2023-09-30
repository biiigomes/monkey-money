import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeasPageComponent } from './view/ideas-page/ideas-page.component';
import { MainPageComponent } from './view/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'pagina-de-ideias',
    component: IdeasPageComponent
  },
  {
    path: 'pagina-de-ideias/:id',
    component: IdeasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
