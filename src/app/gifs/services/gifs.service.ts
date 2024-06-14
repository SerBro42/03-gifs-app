import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  /* Importamos la interfaz Gif de la hoja de interfaces que acabamos de crear */
  public gifList: Gif[] = [];

  /* declaramos esta variable como privada para impedir que sea modificada por ninguna otra cosa
  que no sea este mismo servicio */
  private _tagsHistory: string[] = [];
  /* Nos registramos en Giphy, creamos una Api Key personalizada y la traemos aquí */
  private apiKey: string = 'nePBrRxKQON91BErpeHomvU08RF7sV4R';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  /* Para hacer peticiones HTTP, en primer lugar importamos el módulo y lo inicializamos como privado
  en el constructor de este servicio */
  constructor( private http: HttpClient) { }

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

  searchTag( tag: string ): void {
    /* Primer filtro. Si haces click en el input, no insertas nada y pulsas Enter, no sucede
    nada */
    if (tag.length === 0) return;
    /* Segundo filtro. Creamos una función aparte para aplicar filtros adicionales y la llamamos
    desde aquí */
    this.organiseHistory(tag);

    console.log(this._tagsHistory);

    /* Con el fin de abreviar la URL del http.get, vamos a poner los parámetros de búsqueda a continuación.
    No hace falta importar nada, pues ya viene con JS de serie. Ponemos todos los paráetros que teníamos antes
    en la URL grande */
    const params = new HttpParams()
      .set( 'api_key', this.apiKey )
      .set( 'limit', '10' )
      .set( 'q', tag )



    /* Creamos un observable para hacer la petición HTTP, y nos suscribimos a él para escuchar la información
    que envía */
    /* Sustituimos la URL larga por la variable 'params' que hemos declarado más arriba */
    /* Importamos la interfaz SearchResponse de la hoja de interfaces acabamos de crear y declaramos
    que nuestra petición HTTP es de ese tipo */
    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( resp => {
        //console.log(resp);

        this.gifList = resp.data;
        console.log({ gifs: this.gifList });
      });

  }

}
