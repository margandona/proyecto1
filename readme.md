# EcoTrueque

2. Instala las dependencias:

   ```bash
   npm install
   ```
3. Sincroniza Capacitor:

   ```bash
   npx cap sync
   ```

## Ejecución

1. Construye el proyecto:

   ```bash
   ionic build
   ```
2. Abre el proyecto en Android Studio:

   ```bash
   npx cap open android
   ```

   O abre el proyecto en Xcode:

   ```bash
   npx cap open ios
   ```
3. Ejecuta la aplicación en un emulador o dispositivo físico desde Android Studio o Xcode.

## Servicios y Componentes

### Servicio de Cámara

El servicio de cámara permite a los usuarios tomar fotos de los productos directamente desde la aplicación.

**Uso del Servicio de Cámara**:

```typescript
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    return image.dataUrl;
  }
}
```

**Uso en una Página**:

```typescript
import { Component } from '@angular/core';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage {

  picture: string;

  constructor(private cameraService: CameraService) { }

  async takePicture() {
    this.picture = await this.cameraService.takePicture();
  }
}
```

**HTML de la Página**:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Publicar Producto</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item>
      <ion-label position="floating">Título del producto</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Descripción del producto</ion-label>
      <ion-textarea></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>Categoría</ion-label>
      <ion-select>
        <ion-select-option value="categoria1">Categoría 1</ion-select-option>
        <ion-select-option value="categoria2">Categoría 2</ion-select-option>
        <ion-select-option value="categoria3">Categoría 3</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label>Imágenes del producto</ion-label>
      <ion-button expand="block" (click)="takePicture()">Tomar Foto</ion-button>
      <ion-img *ngIf="picture" [src]="picture"></ion-img>
    </ion-item>
  </ion-list>
</ion-content>
```

### Servicio de Geolocalización

El servicio de geolocalización permite obtener la ubicación del usuario.

**Instalación del Plugin de Geolocalización**:

```bash
npm install @capacitor/geolocation
```

**Servicio de Geolocalización**:

```typescript
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }
}
```

**Uso en una Página**:

```typescript
import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {

  location: any;

  constructor(private geolocationService: GeolocationService) { }

  async getLocation() {
    this.location = await this.geolocationService.getCurrentPosition();
  }
}
```

**HTML de la Página**:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Ubicación</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-button expand="block" (click)="getLocation()">Obtener Ubicación</ion-button>
  <div *ngIf="location">
    <p>Latitud: {{ location.coords.latitude }}</p>
    <p>Longitud: {{ location.coords.longitude }}</p>
  </div>
</ion-content>
```

## Problemas Enfrentados

- **Configuración de Capacitor**: Asegúrate de sincronizar Capacitor después de cualquier cambio de configuración o instalación de nuevos plugins.
- **Permisos de Dispositivo**: Durante las pruebas, asegúrate de otorgar los permisos necesarios para acceder a la cámara y la ubicación del dispositivo.

## Conclusión

EcoTrueque es una aplicación móvil diseñada para facilitar el intercambio de artículos y servicios sostenibles. Con la integración de servicios como cámara y geolocalización, ofrece una experiencia completa y funcional a sus usuarios.
