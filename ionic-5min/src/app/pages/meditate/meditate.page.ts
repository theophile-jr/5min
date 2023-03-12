import { AudioService } from './../../services/audio/audio.service';
import { Router } from '@angular/router';
import { MeditateDataService } from './../../services/meditate-data/meditate-data.service';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { KeepAwake } from '@capacitor-community/keep-awake';

@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnInit {
  breath_text: String = "Breathe in";
  reset_to_five = 0;
  total_time = 0;
  breath_interval: Subscription;
  time_left = this.meditate.meditate_params.duration * 60 - this.total_time;

  constructor(public meditate: MeditateDataService, public router: Router, public audio: AudioService) {
    this.breath_interval = interval(1000).subscribe(() => {
      this.everySecond();
    });
  }

  ngOnInit() {
    if (this.meditate.meditate_params.enabled_music) {
      this.audio.play_music();
    }
    KeepAwake.keepAwake();
  }

  ngOnDestroy() {
    this.breath_interval.unsubscribe();
    if (this.meditate.meditate_params.enabled_music) {
      this.audio.sounds.music.audio.pause();
      this.audio.sounds.music.audio.currentTime = 0;
    }
    if (this.meditate.meditate_params.enabled_gong) {
      this.audio.sounds.gong.audio.pause();
    }
    KeepAwake.allowSleep();
  }

  toggle_BreathText() {
    if (this.breath_text == "Breathe in") {
      this.breath_text = "Breathe out";
    } else {
      this.breath_text = "Breathe in";
    }
  }

  everySecond() {
    if (this.total_time >= (this.meditate.meditate_params.duration * 60)) {
      this.router.navigateByUrl('/home');
    }
    this.reset_to_five++;
    this.total_time++;
    this.time_left = this.meditate.meditate_params.duration * 60 - this.total_time;
    if (this.reset_to_five == 5) {
      if (this.meditate.meditate_params.enabled_vibrations) {
        Haptics.impact({ style: ImpactStyle.Light });
      }
      if (this.meditate.meditate_params.enabled_gong) {
        this.audio.play_gong();
      }
      this.reset_to_five = 0;
      this.toggle_BreathText();
    }
  }
}
