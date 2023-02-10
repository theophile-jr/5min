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
    this.meditate.meditate_form.sound.loaded = false;
    this.meditate.meditate_form.sound.file_name = event.target.value;
    this.meditate.meditate_form.sound.audio = new Audio();
    this.meditate.meditate_form.sound.audio.volume = this.meditate.meditate_form.sound.volume;
    this.meditate.meditate_form.sound.audio.addEventListener("canplaythrough", (ev) => {
      this.meditate.meditate_form.sound.loaded = true;
    });
    this.meditate.meditate_form.sound.audio.preload = "auto";
    this.meditate.meditate_form.sound.audio.src = "assets/sounds/" + this.meditate.meditate_form.sound.file_name;
    this.meditate.meditate_form.sound.audio.load();
  }
  increaseTime() {
    this.meditate.meditate_form.time++;
  }
  decreaseTime() {
    if (this.meditate.meditate_form.time > 1){
      this.meditate.meditate_form.time--;
    }
  }
}
