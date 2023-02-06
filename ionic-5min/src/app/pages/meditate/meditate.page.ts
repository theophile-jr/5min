import { Router } from '@angular/router';
import { MeditateDataService } from './../../services/meditate-data.service';
import { Component, OnInit} from '@angular/core';
import { interval, Observable } from 'rxjs';

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

  constructor(public meditate : MeditateDataService, private router : Router) {
    this.breath_interval = interval(1000).subscribe(()=>{
      if (this.total_time >= this.meditate.meditate_form.time * 60){
        this.router.navigateByUrl('/home');
      }
      this.reset_to_five++;
      this.total_time++;
      if (this.reset_to_five == 5){
        this.reset_to_five = 0;
      if (this.breath_text == "Breathe in"){
        this.breath_text = "Breathe out";
      }else{
        this.breath_text = "Breathe in";
      }
    }
    });
  }
  ngOnInit() {
    if (this.meditate.meditate_form.music){
      this.music = new Audio();
      this.music.src = '../../../assets/music.mp3';
      this.music.load();
      this.music.play();
      this.music.loop = true;
    }
  }
  ngOnDestroy() {
    if (this.meditate.meditate_form.music){
      this.music.pause();
      this.music = null;
    }
  }
}
