import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as  moment from 'moment';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/firebase/api.service';
import { UtilService } from '../services/util/util.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent implements OnInit {

  public shareform: FormGroup;
  link:any=null;

  constructor(
    public dialogRef: MatDialogRef<ShareComponent>,
    @Inject(MAT_DIALOG_DATA) public docdata: any,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private api : ApiService,
    private util: UtilService,

  ) { }

  ngOnInit(): void {
    console.log(this.docdata);
    this.initform();
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  initform() :void{
    this.shareform = this.fb.group({
      password: ['',[Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*'),Validators.minLength(6)]
      ],
    });

  }

  get f(){
    return this.shareform.controls
  }

  filetype(type){

    if(type=='pdf'){
      return 'far fa-file-pdf fa-3x col-red'
    }

    if(type=='docx'){
      return 'far fa-file-word fa-3x col-blue'
    }


    if(type=='pptx'){
      return 'far fa-file-powerpoint fa-3x col-orange'
    }

    if(type=='xlsx'){
      return ' far fa-file-excel fa-3x col-green'
    }





  }

  convetdate(date){
    return moment(date).format("MMM Do YY");
  }

  Share(){
    let id = this.util.createid();
    let data = {
      id:id,
      password:this.f.password.value,
      filepath:this.docdata.filepath,
      FileName:this.docdata.FileName,
      Date:Date.now(),
      type:this.docdata.type,
      Uid:localStorage.getItem('uid')
    }
    this.api.sharerecord(id,data).then(data=>{
      this.link = environment.appurl+'sharedoc?id='+id
    }).catch(error=>{
      console.log(error);
    })

  }

}
