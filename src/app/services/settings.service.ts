import { Injectable } from '@angular/core';

import { Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: true
  // tslint:disable-next-line:semicolon
  }

  constructor() {
    // tslint:disable-next-line:whitespace
    if(localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
