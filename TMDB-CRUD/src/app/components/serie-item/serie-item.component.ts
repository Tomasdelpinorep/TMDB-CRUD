import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Serie } from '../../models/models/serie-list.interface';


@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent {

  @Input() serie!: Serie;
  @Output() serieClick = new EventEmitter <number>;

  getSerieImage(){
    if (this.serie.poster_path == null) {
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    }
    return 'https://image.tmdb.org/t/p/w500/'+this.serie.poster_path;
  }
}
