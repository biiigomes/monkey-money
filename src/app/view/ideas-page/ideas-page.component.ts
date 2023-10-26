import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IdeasPageService } from 'src/app/_services/ideas-page.service';

@Component({
  selector: 'app-ideas-page',
  templateUrl: './ideas-page.component.html',
  styleUrls: ['./ideas-page.component.css']
})
export class IdeasPageComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _ideaService: IdeasPageService,
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this._formBuilder.group({
      name: [''],
      idea: [''],
      subtitle: ['']
    })
  }

  createIdea(): void {
    let rawValue = this.formGroup.getRawValue();
    this._ideaService.postIdea(rawValue).subscribe(
      (response) => {
        this._router.navigate(['']);
      }
    )
  }

  previousPage(): void {
    this._router.navigate(['']);
  }
}
