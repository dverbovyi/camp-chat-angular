import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ChatService } from "app/chats/shared";

@Component({
  selector: 'ct-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ChatNavComponent {
  private isMenuOpen: boolean = false;
  private isChatPanelOpen: boolean = false;
  private searchValue: string = '';

  @Output() isLeftChatOpen = new EventEmitter<boolean>();
  constructor(private service: ChatService) { }

  onMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuClose() {
    this.isMenuOpen = false;
  }

  onBlur(): void {
    this.searchValue = '';
    this.service.setSeachValue('');
  }

  onChatPanelOpen() {
    if (this.isChatPanelOpen) {
      this.isMenuOpen = false;
    }
    this.isChatPanelOpen = !this.isChatPanelOpen;
    this.isLeftChatOpen.emit(this.isChatPanelOpen);
  }

  private onSearchValueChange(value: string): void {
    this.service.setSeachValue(value);
  }

}
