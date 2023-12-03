import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountDetailsResponse } from '../../models/account-details';
import { UserList } from '../../models/user-lists.interface';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css'
})
export class UserListsComponent implements OnInit{
  constructor(private accountService: AccountService){}
  userDetails!: AccountDetailsResponse;
  userLists: UserList[] = [];

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.userDetails = resp;

      this.accountService.getUserLists(this.userDetails.id).subscribe(resp => {
        this.userLists = resp.results;
        console.log(this.userLists)
      })
    })
  }

}
