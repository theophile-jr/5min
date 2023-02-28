import { AudioService } from './../../services/audio/audio.service';
import { Component, OnInit } from '@angular/core';
import { MeditateDataService } from 'src/app/services/meditate-data/meditate-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public audio : AudioService, public data : MeditateDataService) { }
  save_settings(){
    this.data.save_settings(this.audio.sounds);
  }
  ngOnInit() {}
}
