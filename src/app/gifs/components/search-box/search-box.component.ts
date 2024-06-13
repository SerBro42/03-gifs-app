

import { Component, ElementRef, ViewChild } from '@angular/core';

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

  constructor() { }

  searchTag( ) {
    const newTag = this.tagInput.nativeElement.value;

    console.log({ newTag });
  }

}
