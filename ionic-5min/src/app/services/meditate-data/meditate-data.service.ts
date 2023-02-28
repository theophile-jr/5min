import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class MeditateDataService {

  meditate_params = {
    duration: 5,
    enabled_vibrations : false,
    enabled_gong : false,
    enabled_music : false,
  }

  get_saved_settings(){
    return new Promise((resolve, reject) =>{
      Preferences.get({key : 'settings'}).then((val : any)=>{
        resolve(JSON.parse(val.value));
      });
    });
  }

  save_settings(settings){
    Preferences.set({
      key: 'settings',
      value: JSON.stringify(settings)
    });
  }

  sounds_list = [
    {name : 'Musique', file_name : 'music-relax.mp3'},
    {name : 'Rivière', file_name : 'river.mp3'},
    {name : 'Ocean', file_name : 'ocean.mp3'},
    {name : 'Forêt', file_name : 'forest.mp3'},
    {name : 'Bruit blanc', file_name : 'white-noise.mp3'},
    {name : 'Interstellar', file_name : 'interstellar.mp3'},
  ]
  constructor() { }
}
