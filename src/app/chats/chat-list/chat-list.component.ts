import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat, ChatService } from '../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.scss'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit, OnDestroy {
  @Input() chats: Promise<Chat[]>;
  private searchValue: string = '';
  private selectedId: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private chatService: ChatService) { }

  ngOnInit() {
    this.subscription = this.chatService.getSearchValue().subscribe(value => this.searchValue = value)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  select(chat) {
    this.selectedId = chat.id;
    this.router.navigate(['chat', chat.id])
    this.searchValue = '';
  }

}
