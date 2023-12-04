import { Component, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailsResponse } from '../../models/models/actor-details.interface';
import { Actor } from '../../models/models/actor-list.interface';
import { ActorService } from '../../services/actors.service';

@Component({
  selector: 'app-actor-details-page',
  templateUrl: './actor-details-page.component.html',
  styleUrls: ['./actor-details-page.component.css'],
})
export class ActorDetailsPageComponent implements OnInit {
  actorDetails!: ActorDetailsResponse;
  popularList!: Actor[];
  route: ActivatedRoute = inject(ActivatedRoute);
  actorId!: number;
  pageNumber!: number;

  constructor(private actorService: ActorService) {
    this.actorId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.actorService.getActorDetails(this.actorId).subscribe((resp) => {
      this.actorDetails = resp;
    });
  }
}
