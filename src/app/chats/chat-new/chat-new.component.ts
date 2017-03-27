import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from '../../auth/users/'
import { Chat } from '../shared/';
import { USERS } from '../../auth/users/mock-users';
import { Observable } from 'rxjs';

@Component({
  selector: 'ct-chat-new',
  styleUrls: ['./chat-new.component.scss'],
  templateUrl: './chat-new.component.html'
})

export class ChatNewComponent implements OnInit {
  private users: any[] = USERS;
  userId: number = 1;
  isUsersWrapVisible: boolean = true;
  isUserChecked: boolean = false;
  newChat: Chat = {
    id: this.userId,
    name: '',
    attendees: [],
    creator: this.userId,
    createdAt: new Date()
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users = this.userService.getUsers();
  }

  onAddUser(btn: HTMLElement, i: number) {

    if (!btn.classList.contains('checked')) {
      this.newChat.attendees.push(i);
    } else {
      this.newChat.attendees.splice(this.newChat.attendees[i], 1);
    }
    btn.classList.toggle('checked');
    this.isUserChecked = this.newChat.attendees.length > 0;
  }

  onOnenUsersWrap() {
    this.isUsersWrapVisible = !this.isUsersWrapVisible;
  }

  onSubmit(formValue) {
    this.newChat.name = formValue.chatName;
    console.log(formValue)
    console.log(this.newChat)
  }
}
