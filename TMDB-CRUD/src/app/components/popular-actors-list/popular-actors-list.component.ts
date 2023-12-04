import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actors.service';
import { Actor } from '../../models/models/actor-list.interface';

@Component({
  selector: 'app-popular-actors-list',
  templateUrl: './popular-actors-list.component.html',
  styleUrls: ['./popular-actors-list.component.css']
})
export class PopularActorsListComponent implements OnInit {
  constructor(private actorService: ActorService) { }
  actorList: Actor[] = [];
  page = 1;
  totalResults !: number;

  ngOnInit(): void {
    this.actorService.getActorList().subscribe(resp => {
      this.actorList = resp.results;
      this.totalResults = resp.total_results;
    })
  }

  loadNewPage(clickedPage: number): void {
    this.actorService.getPagedActorList(this.page).subscribe(resp => { this.actorList = resp.results });
    this.page = clickedPage;
  }
}