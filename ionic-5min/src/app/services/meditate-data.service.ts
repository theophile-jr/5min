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
  }
  sounds_list = [
    {name : 'Musique', file_name : 'music-relax.ogg'},
    {name : 'Rivière', file_name : 'river.ogg'},
    {name : 'Ocean', file_name : 'ocean.ogg'},
    {name : 'Forêt', file_name : 'forest.ogg'},
    {name : 'Bruit blanc', file_name : 'white-noise.ogg'},
  ]
  constructor() { }
}
