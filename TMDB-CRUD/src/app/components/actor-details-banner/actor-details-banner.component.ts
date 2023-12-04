import { Component, Input } from '@angular/core';
import { ActorDetailsResponse } from '../../models/models/actor-details.interface';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-actor-details-banner',
  templateUrl: './actor-details-banner.component.html',
  styleUrls: ['./actor-details-banner.component.css'],
})
export class ActorDetailsBannerComponent {
  @Input() actorDetails!: ActorDetailsResponse;

  getActorImageUrl() {
    if (this.actorDetails.profile_path != null)
      return environment.smallerPng.concat(this.actorDetails.profile_path);

    return '';
  }

  genderToString(gender: number) {
    if (gender == 0 || gender == 2) return 'Male';
    if (gender == 1) return 'Female';

    return 'Other';
  }
}
