import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  /* Primer paso para la generación de tarjetas en pantalla: importamos el servicio gifsService mediante
  el constructor */
  constructor ( private gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}
