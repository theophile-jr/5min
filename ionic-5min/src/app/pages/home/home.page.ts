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
    this.meditate.meditate_form.sound_load.loaded = false;
    this.meditate.meditate_form.music_name = event.target.value;
    this.meditate.meditate_form.sound_load.audio = new Audio();
    this.meditate.meditate_form.sound_load.audio.load();
    this.meditate.meditate_form.sound_load.audio.src = "assets/sounds/" + this.meditate.meditate_form.music_name;
    this.meditate.meditate_form.sound_load.audio.addEventListener("canplaythrough", (ev) => {
      this.meditate.meditate_form.sound_load.loaded = true;
    });
  }
  increaseValue() {
    this.meditate.meditate_form.time++;
  }
  decreaseValue() {
    this.meditate.meditate_form.time--;
  }
}
