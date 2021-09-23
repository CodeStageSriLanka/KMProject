import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { ApiService } from '../services/firebase/api.service';
import { UtilService } from '../services/util/util.service';
import { ViewchatComponent } from './viewchat/viewchat.component';
@Component({
  selector: 'app-chatresults',
  templateUrl: './chatresults.component.html',
  styleUrls: ['./chatresults.component.sass']
})
export class ChatresultsComponent implements OnInit {

  chattable : MatTableDataSource<any>;
  chattableColumns: string[] = [
    'UserID',
    'UserName',
    'ChatDate',
    'View'
    ];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.chattable.filter = filterValue.trim().toLowerCase();
    }
  constructor(
    private api : ApiService,
    private util: UtilService,
    private dialogModel: MatDialog
  ) { }

  ngOnInit(): void {
    this.getchatresults();
  }

  getchatresults(){
    this.api.getchatresults().subscribe(data=>{
      this.chattable = new MatTableDataSource(data);
      this.chattable.paginator = this.paginator;
    })

  }

  Dateformat(val){
    return moment(val).format('YYYY/MM/DD');
  }

  viewchat(chat,username){

    const dialogRef = this.dialogModel.open(ViewchatComponent, {
      width: '600px',
      height:'800px',
      data:{
        chat:JSON.parse(chat),
        Uname:username
      },
      disableClose: false
    });

    this.dialogModel.afterAllClosed.subscribe(() => {
      // Do stuff after the dialog has closed
     // this.getfiles()
  });

  }


}
