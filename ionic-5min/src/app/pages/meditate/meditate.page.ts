import { Router } from '@angular/router';
import { MeditateDataService } from './../../services/meditate-data.service';
import { Component, OnInit} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnInit {
  breath_text:String = "Breathe in";
  reset_to_five = 0;
  total_time = 0;
  breath_interval;
  music: any;
  gong_sound : any;
  time_left = this.meditate.meditate_form.time * 60 - this.total_time;

  constructor(public meditate : MeditateDataService, public router : Router) {
    this.breath_interval = interval(1000).subscribe(()=>{
      if (this.total_time >= (this.meditate.meditate_form.time * 60)){
        this.router.navigateByUrl('/home');
      }
      this.reset_to_five++;
      this.total_time++;
      this.time_left = this.meditate.meditate_form.time * 60 - this.total_time;
      if (this.reset_to_five == 5){
        if (meditate.meditate_form.vibrations){
          Haptics.impact({ style: ImpactStyle.Light });
        }
        if (meditate.meditate_form.gongtime){
          this.play_gong();
        }
        this.reset_to_five = 0;
      if (this.breath_text == "Breathe in"){
        this.breath_text = "Breathe out";
      }else{
        this.breath_text = "Breathe in";
      }
    }
    });
  }
  play_gong(){
    if (this.gong_sound.paused){
      this.gong_sound.play();
    }else{
      this.gong_sound.currentTime = 0;
      this.gong_sound.play();
    }
  }
  ngOnInit() {
    if (this.meditate.meditate_form.music){
      this.meditate.meditate_form.sound_load.audio.play();
      this.meditate.meditate_form.sound_load.audio.loop = true;
    }
    if (this.meditate.meditate_form.gongtime){
      this.gong_sound = new Audio();
      this.gong_sound.volume = 0.2;
      this.gong_sound.src = '../../../assets/sounds/gong.mp3';
      this.gong_sound.load();
    }
  }
  ngOnDestroy() {
    if (this.meditate.meditate_form.gongtime){
      this.gong_sound.pause();
      this.gong_sound = null;
    }
    this.breath_interval.unsubscribe();
    if (this.meditate.meditate_form.music){
      this.meditate.meditate_form.sound_load.audio.pause();
    }
  }
}
