import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  /* Tercer paso: declaramos el import aquí para que nos llegue la información sobre las tarjetas
  a dibujar. Este array "gifs" es el que está siendo mostrado en home-page.component */
  @Input()
  public gifs: Gif[] = [];

}
