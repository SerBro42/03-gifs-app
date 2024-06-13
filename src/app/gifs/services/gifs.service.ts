import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  /* declaramos esta variable como privada para impedir que sea modificada por ninguna otra cosa
  que no sea este mismo servicio */
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organiseHistory(tag: string) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);

  }

  public searchTag( tag: string ): void {
    /* Primer filtro. Si haces click en el input, no insertas nada y pulsas Enter, no sucede
    nada */
    if (tag.length === 0) return;
    /* Segundo filtro. Creamos una función aparte para aplicar filtros adicionales y la llamamos
    desde aquí */
    this.organiseHistory(tag);

    //this._tagsHistory.unshift( tag ); //Esta llamada a función es redundante
    console.log(this._tagsHistory);

  }

}
