import { Component } from '@angular/core';
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

  get tagHistoryArray() {
    return this.gifsService.tagsHistory;
  }

  repeatSearchTag( tag: string ): void {
    this.gifsService.searchTag(tag);
  }

}
