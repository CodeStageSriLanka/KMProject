import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../services/firebase/api.service';
import { UtilService } from '../services/util/util.service';

@Component({
  selector: 'app-sharedoc',
  templateUrl: './sharedoc.component.html',
  styleUrls: ['./sharedoc.component.sass']
})
export class SharedocComponent implements OnInit {

  docdata:any=''
  showdownbutton = false;
  password:any=''
  constructor(
    private route: ActivatedRoute,
    private api : ApiService,
    private util: UtilService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      console.log(data.id);
      this.getshareddocdetails(data.id);
    });
  }

  getshareddocdetails(id){
    this.api.getshareddocdetails(id).then(data=>{
      console.log(data);
      this.docdata = data;
    })

  }

  convetdate(date){
    return moment(date).format("MMM Do YY");
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
  checkpassword(){
    if(this.password ==this.docdata.password){
      this.showdownbutton = true;
    }else{
      console.log('not valid password');
    }
  }

}
