import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MeditateDataService } from '../../services/meditate-data.service';
import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { trigger, transition, style, animate } from '@angular/animations';
import { Haptics, ImpactStyle } from '@capacitor/haptics';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('moveUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('2s', style({ transform: 'translateY(0)' }))
      ])
    ])
  ],
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
    this.meditate.meditate_form.sound.audio.addEventListener("canplaythrough", (ev) => {
      this.meditate.meditate_form.sound.loaded = true;
    });
    this.meditate.meditate_form.sound.audio.preload = "auto";
    this.meditate.meditate_form.sound.audio.src = "assets/sounds/" + this.meditate.meditate_form.sound.file_name;
    this.meditate.meditate_form.sound.audio.load();
  }
  increaseValue() {
    this.meditate.meditate_form.time++;
  }
  decreaseValue() {
    this.meditate.meditate_form.time--;
  }
}
