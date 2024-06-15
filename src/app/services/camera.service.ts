import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  async takePicture(): Promise<string> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
  
      if (image.dataUrl) {
        return image.dataUrl;
      } else {
        throw new Error('La imagen no tiene una URL válida.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      // Puedes manejar el error según tus necesidades (por ejemplo, mostrar un mensaje al usuario).
      throw error; // Opcional: relanzar el error para que el componente que llama pueda manejarlo.
    }
  }
}