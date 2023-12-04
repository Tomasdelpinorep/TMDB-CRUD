import { Component, Input } from '@angular/core';
import { UserList } from '../../models/models/user-lists.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() userList!: UserList;

}
