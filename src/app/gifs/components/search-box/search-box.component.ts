

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

/* keyup.enter significa que se dispara cada vez que se levanta la tecla Enter despuès de
ser pulsada. #txtTagInput es como ponerle un ID */
@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag(  )"
      #txtTagInput
    >
  `
})

export class SearchBoxComponent {

  /* Este ViewChild está haciendo referencia al elemento html que tiene la etiqueta txtTagInput.
  Sirve para hacer una "referencia local".
  Ponemos el non-null assertion operator en la declaración de tagInput, porque sale el error de
  que no está inicializado */
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  /* para usar el servicio de gifs, lo pasamos como parámetro al constructor y lo importamos al
  principio del archivo */
  constructor( private GifsService: GifsService ) { }

  searchTag( ) {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag(newTag);

    console.log({ newTag });
    /* Limpiamos la caja de texto al finalizar la operación */
    this.tagInput.nativeElement.value = '';
  }

}
