import { Component, OnInit } from '@angular/core';
import { Chat, ChatService } from './shared';

@Component({
  selector: 'ct-chats',
  styleUrls: ['./chats.component.css'],
  templateUrl: './chats.component.html'
})

export class ChatsComponent implements OnInit {
  chats: Promise<Chat[]>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chats = this.chatService.getAll();
    console.log(this.chats)
  }

}