import { Component, OnInit, inject } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDetailsResponse, Movie} from '../../models/models/list-details';


@Component({
  selector: 'app-list-details-page',
  templateUrl: './list-details-page.component.html',
  styleUrl: './list-details-page.component.css'
})
export class ListDetailsPageComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router)
  listId!: number;
  listDetails!: ListDetailsResponse;
  listMovies: Movie[] = [];
  sessionId!: string;

  constructor(private listService: ListService) {
    this.listId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    const storedSessionId = sessionStorage.getItem('SESSION_ID');
    this.sessionId = storedSessionId ?? 'defaultSessionId';


    this.listService.getListDetails(this.listId).subscribe(resp => {
      this.listDetails = resp;
      this.listMovies = resp.items;
    })
  }

  clearList() {
    if (sessionStorage.getItem('SESSION_ID'))
    this.listService.clearList(this.listId, this.sessionId).subscribe(resp => {
      window.location.reload();
    })
  }

  deleteList() {
    if (sessionStorage.getItem('SESSION_ID'))
      this.listService.deleteList(this.listId, this.sessionId).subscribe(resp => {
        this.router.navigate(['/lists']);
    });
  }

  isEmpty(list: any[]){
    if(list.length == 0 ) return true;

    return false;
  }

}
