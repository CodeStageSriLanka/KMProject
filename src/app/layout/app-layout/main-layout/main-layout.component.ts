import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatbotComponent } from 'src/app/chatbot/chatbot.component';
import { ApiService } from 'src/app/services/firebase/api.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private dialogModel: MatDialog,
    private api : ApiService,
    private util: UtilService,
  ) {}

  ngOnInit(): void {}


  ChatNow(): void {
    const dialogRef = this.dialogModel.open(ChatbotComponent, {
      width: '400px',
      height:'600px',
      position:{ bottom: '60px', right: '70px'},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(data => {
      //console.log(data.data.id);
      //console.log(data.data.chat);
      if(data.data.chat!='[]'){
        this.api.savechatsessions(data.data.id,data.data);
      }else{
        return 0;
      }

  });

  }
}
