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
  selectMusic(event : any){
    this.meditate.meditate_form.music_name = event.target.value;
  }
  increaseValue() {
    this.meditate.meditate_form.time++;
  }

  decreaseValue() {
    this.meditate.meditate_form.time--;
  }
}
