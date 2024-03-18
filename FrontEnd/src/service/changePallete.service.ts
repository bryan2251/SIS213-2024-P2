import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePaletteService {
  paleta = 'paleta1';

  cambiarPaleta(paleta: string) {
    this.paleta = paleta;
    document.body.className = this.paleta;
  }
}
