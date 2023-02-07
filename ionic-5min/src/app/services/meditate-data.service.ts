import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeditateDataService {
  meditate_form = {
    time: 5,
    music: false,
    music_name: "music.mp3",
    vibrations : false,
    gongtime : false,
    breathsound : false,
  }
  sounds_list = [
    {name : 'Musique', file_name : 'music relax.mp3'},
    {name : 'Rivière', file_name : 'river.mp3'},
    {name : 'Ocean', file_name : 'ocean.mp3'},
    {name : 'Forêt', file_name : 'forest.mp3'},
    {name : 'Bruit blanc', file_name : 'white noise.ogg'},
  ]
  constructor() { }
}
