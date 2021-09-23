import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewchat',
  templateUrl: './viewchat.component.html',
  styleUrls: ['./viewchat.component.css']
})
export class ViewchatComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public chat: any,
  ) { }

  ngOnInit(): void {
    console.log(this.chat.chat);

  }

}
