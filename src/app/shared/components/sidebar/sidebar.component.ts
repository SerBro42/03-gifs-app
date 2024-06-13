import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // private
  constructor( private gifsService: GifsService) {

  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  // @Input()
  // public tagHistoryArray: string[] = [
  //   'Valorant',
  //   'Placeholder'
  // ]

}
