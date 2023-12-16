import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../services/message.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit{
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
}
