import { Component, OnInit, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountDetailsResponse } from '../../models/models/account-details';
import { UserList } from '../../models/models/user-lists.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css'
})
export class UserListsComponent implements OnInit {
  userDetails!: AccountDetailsResponse;
  userLists: UserList[] = [];
  private modalService = inject(NgbModal);
  closeResult = '';
  nameControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl("", [Validators.required]);
  newListForm: FormGroup;

  constructor(private accountService: AccountService, private fb: FormBuilder, private listService: ListService) {
    this.newListForm = this.fb.group({
      name: this.nameControl,
      description: this.descriptionControl,
      language: "es"
    })
  }

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.userDetails = resp;

      this.accountService.getUserLists(this.userDetails.id).subscribe(resp => {
        this.userLists = resp.results;
      })
    })
  }

  isEmpty(list: any[]) {
    if (list.length == 0) return true;

    return false;
  }

  open(modal: any) {
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  submit() {
    const sessionId = sessionStorage.getItem('SESSION_ID');

    if (this.newListForm.valid && sessionId != null) {
      this.listService.createList(this.newListForm.value, sessionId).subscribe(() =>{
        this.ngOnInit();
        this.modalService.dismissAll();
      });
    }
  }
}
