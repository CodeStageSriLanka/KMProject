import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Message,ChatbotService} from '../services/chat/chatbot.service'
import { UtilService } from '../services/util/util.service';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  providers:[ChatbotService]
})
export class ChatbotComponent implements OnInit {

  messages: Message[] = [];
  value: string;
  public chatform: FormGroup;
  constructor(
    public chatService: ChatbotService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChatbotComponent>,
    private util: UtilService,
    ) { }

  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });

    this. initform();

  }

  initform() :void{
    this.chatform = this.fb.group({
      value: ['',[Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
      ],
    });

  }

  get f(){
    return this.chatform.controls
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.f.value.value);
    this.chatform.reset();
    console.log(this.messages);

  }

  access(){
    let data = JSON.parse(localStorage.getItem('info'))
    return data;
  }

  closeDialog(): void {

    let dataa = {
      id:this.util.createid(),
      chat:JSON.stringify(this.messages),
      UserID:this.access().Uid,
      UserName:this.access().FullName,
      Date:Date.now()
    }
    this.dialogRef.close({data:dataa});
  }

}
