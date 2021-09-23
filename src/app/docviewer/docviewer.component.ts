import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css']
})
export class DocviewerComponent implements OnInit {

  fileurl ='';
  constructor(
    public dialogRef: MatDialogRef<DocviewerComponent>,
    @Inject(MAT_DIALOG_DATA) public url: any,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log(this.url);
    this.fileurl = this.url;
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

}
