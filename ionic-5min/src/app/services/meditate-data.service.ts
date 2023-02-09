import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeditateDataService {

  meditate_form = {
    time: 5,
    vibrations : false,
    gongtime : false,
    breathsound : false,
    sound : {
      enabled : false,
      file_name: "",
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
    {name : 'Interstellar', file_name : 'interstellar.mp3'},
  ]
  constructor(private window : Window) { }
}
