import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class MeditateDataService {
  meditate_form = {
    time: 5,
    music: false,
    music_name: "music-relax.ogg",
    vibrations : false,
    gongtime : false,
    breathsound : false,
    sound_load : {
      loaded: false,
      audio : new Audio(),
    }
  }
  sounds_list = [
    {name : 'Musique', file_name : 'music-relax.mp3'},
    {name : 'Rivière', file_name : 'river.mp3'},
    {name : 'Ocean', file_name : 'ocean.mp3'},
    {name : 'Forêt', file_name : 'forest.mp3'},
    {name : 'Bruit blanc', file_name : 'white-noise.mp3'},
  ]
  constructor() { }
}
