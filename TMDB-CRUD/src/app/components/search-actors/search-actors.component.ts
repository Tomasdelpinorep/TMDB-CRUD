import { Component, EventEmitter, Output } from '@angular/core';
import { ActorService } from '../../services/actors.service';
import { Actor } from '../../models/models/actor-list.interface';

@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.css']
})
export class SearchActorsComponent {
  constructor(private actorService :ActorService){}
  searchedMovieList :Actor[] = [];
  @Output() sendSearchedMovieList = new EventEmitter<Actor[]>();

  onEnter(searchQuery :string){
    this.actorService.getActorListWithQuery(searchQuery).subscribe(resp => {
      this.searchedMovieList = resp.results;
      this.sendSearchedMovieList.emit(this.searchedMovieList);
    })
  }
}
