import { MeditateDataService } from './../meditate-data/meditate-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(public meditate : MeditateDataService) { }

  sounds = {
    gong : {
      file_name: "gong.mp3",
      loaded: false,
      audio : new Audio(),
      volume: 0.5,
    },
    music : {
      file_name: "",
      loaded: false,
      audio : new Audio(),
      volume: 0.5,
    }
  }

  public loadMusic(filename){
    this.sounds.music.loaded = false;
    this.sounds.music.file_name = filename;
    this.sounds.music.audio = new Audio();
    this.sounds.music.audio.addEventListener("canplaythrough", (ev) => {
      this.sounds.music.loaded = true;
    });
    this.sounds.music.audio.preload = "auto";
    this.sounds.music.audio.src = "assets/sounds/" + this.sounds.music.file_name;
    this.sounds.music.audio.load();
  }

  public loadGong(filename){
    this.sounds.gong.loaded = false;
    this.sounds.gong.file_name = filename;
    this.sounds.gong.audio = new Audio();
    this.sounds.gong.audio.addEventListener("canplaythrough", (ev) => {
      this.sounds.gong.loaded = true;
    });
    this.sounds.gong.audio.preload = "auto";
    this.sounds.gong.audio.src = "assets/sounds/" + this.sounds.gong.file_name;
    this.sounds.gong.audio.load();
  }

  public play_gong(){
    this.sounds.gong.audio.volume = this.sounds.gong.volume;
    if (this.sounds.gong.audio.paused){
      this.sounds.gong.audio.play();
    }else{
      this.sounds.gong.audio.currentTime = 0;
      this.sounds.gong.audio.play();
    }
  }

  public play_music(){
    this.sounds.music.audio.volume = this.sounds.music.volume;
    this.sounds.music.audio.play();
      this.sounds.music.audio.loop = true;
  }
}
