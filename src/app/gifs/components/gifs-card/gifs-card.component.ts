import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  /* Se puede usar el non-null assertion operator para ahorrarnos los errores relacionados con la
  no declaración de las variables del objeto Gif (que son 17 en total) */
  @Input()
  public gif!: Gif;

  /* Validación para que siempre nos proporcionen un dato de gif */
  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is required');
  }

}
