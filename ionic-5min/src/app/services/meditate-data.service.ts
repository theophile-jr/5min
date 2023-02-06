import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeditateDataService {
  meditate_form = {
    time: 1,
    music: false,
    vibrations : false,
    gongtime : false,
    breathsound : false,
  }
  constructor() { }
}
