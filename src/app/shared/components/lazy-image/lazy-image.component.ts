import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  /* Ambos inputs reciben información del componente padre (gifs-card.component) */
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('URL property is required');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
