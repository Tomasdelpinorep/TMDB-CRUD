import { Component, Input } from '@angular/core';
import { Actor } from '../../models/models/actor-list.interface';


@Component({
  selector: 'app-searched-actors-list',
  templateUrl: './searched-actors-list.component.html',
  styleUrls: ['./searched-actors-list.component.css'],
})
export class SearchedActorsListComponent {
  @Input() searchedActorList!: Actor[];
}
