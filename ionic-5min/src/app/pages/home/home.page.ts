import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MeditateDataService } from '../../services/meditate-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router : Router, public meditate : MeditateDataService) {}

  formSubmit() {
    this.router.navigateByUrl('/meditate');
  }
}
