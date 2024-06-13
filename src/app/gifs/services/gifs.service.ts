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

  public searchTag( tag: string ): void {

    this._tagsHistory.unshift( tag );

  }

}
