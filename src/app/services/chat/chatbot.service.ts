import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Message {
  constructor(public author: string, public content: string) {}
}
export class ChatbotService {

  conversation = new Subject<Message[]>();

  messageMap = {
    "Hi": "Hello, Please share your knoweledge with us",
    "hi": "Hello, Please share your knoweledge with us" ,
    // "Who are you": "My name is Agular Bot",
    // "What is Angular": "Angular is the best framework ever",
    "default": "Thank you for sharing your knowledge with us"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));

    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }


}
