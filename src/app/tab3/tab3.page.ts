import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class PublicarPage {
  picture: string ="";

  constructor(private cameraService: CameraService) { }

  async takePicture() {
    this.picture = await this.cameraService.takePicture();
  }
}

