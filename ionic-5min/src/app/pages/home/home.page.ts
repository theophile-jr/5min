import { AudioService } from './../../services/audio/audio.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MeditateDataService } from '../../services/meditate-data/meditate-data.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router : Router, public meditate : MeditateDataService, public audio : AudioService) {}
  formSubmit() {
    this.router.navigateByUrl('/meditate');
  }
  selectMusic(event : any){
    this.audio.loadMusic(event.target.value);
  }
  loadGong(event : any){
    if (!this.audio.sounds.gong.loaded){
      this.audio.loadGong("gong.mp3");
    }
  }
  increaseTime() {
    this.meditate.meditate_params.duration++;
  }
  decreaseTime() {
    if (this.meditate.meditate_params.duration > 1){
      this.meditate.meditate_params.duration--;
    }
  }
}
