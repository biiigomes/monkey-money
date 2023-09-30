import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IdeasPageResponse } from 'src/app/_interfaces/ideas-page-response.interface';
import { IdeasPageService } from 'src/app/_services/ideas-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public ideas!: IdeasPageResponse[];

  constructor(
    private _router: Router,
    private _ideaService: IdeasPageService,
  ){}
  
  ngOnInit(): void {
    this.getIdeas();
  }

  getIdeas(): void {
    this._ideaService.getIdea()
    .subscribe(
      (response) => {
        this.ideas = response!;
      }
    )
  }

  goToIdeasPage(): void {
    this._router.navigate(['pagina-de-ideias']);
  }
}
