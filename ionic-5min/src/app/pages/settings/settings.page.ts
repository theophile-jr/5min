import { AudioService } from './../../services/audio/audio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public audio : AudioService) { }
  ngOnInit() {

  }
}
