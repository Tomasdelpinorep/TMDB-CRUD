import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Cast } from '../../models/models/actor-list-credits.interface';
import { Actor } from '../../models/models/actor-list.interface';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent {
  @Input() actor !: Actor | Cast;
  @Input() page !: number;
  constructor(private router: Router) { }

  sendActorPage(actorId: number, page: number) {
    this.router.navigate(['/actors', actorId], { queryParams: { page: page } });
  }
  getActorImageUrl() {
    if (this.actor.profile_path == null) {
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    }
    return `${environment.smallerPng}${this.actor.profile_path}`;
  }
}
