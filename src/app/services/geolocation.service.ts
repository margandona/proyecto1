import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {

  constructor() { }

  async getCurrentPosition(): Promise<GeolocationPosition> {
    const position = await Geolocation.getCurrentPosition();
    return position;
  }

  watchPosition(callback: (position: GeolocationPosition, err?: any) => void) {
    Geolocation.watchPosition({}, callback);
  }
}
