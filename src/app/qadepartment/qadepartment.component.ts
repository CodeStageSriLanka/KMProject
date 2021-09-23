import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { DocviewerComponent } from '../docviewer/docviewer.component';
import { ApiService } from '../services/firebase/api.service';
import { UtilService } from '../services/util/util.service';
import { ShareComponent } from '../share/share.component';
import { QadropperComponent } from './qadropper/qadropper.component';

@Component({
  selector: 'app-qadepartment',
  templateUrl: './qadepartment.component.html',
  styleUrls: ['./qadepartment.component.sass']
})
export class QadepartmentComponent implements OnInit {

  files:any = []
  title = 'Angular Search Using ng2-search-filter';
  searchText;

  filterOption: string = 'all';
  searchValue: string = '';


  filteredItems = [];

  constructor(
    private dialogModel: MatDialog,
    private api : ApiService,
    private util: UtilService,
  ) {

  }

  async updateResults() {
    this.filteredItems = this.filterByOption(this.searchByValue(this.files));
  }

  searchByValue(items) {
    return items.filter(item => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.title.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || item.author.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
  }

  filterByOption(items) {
    return items.filter(item => {
      if (this.filterOption === 'all' || this.filterOption === item.author) {
        return true;
      }
    })
  }

  ngOnInit(): void {
    this.getfilessuc();
    console.log(JSON.parse(localStorage.getItem('info')));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.files.title = filterValue.trim().toLowerCase();
    console.log(this.files);

  }

openUplaod(): void {
    const dialogRef = this.dialogModel.open(QadropperComponent, {
      width: '600px',
      disableClose: true
    });

    this.dialogModel.afterAllClosed.subscribe(() => {
      // Do stuff after the dialog has closed
     // this.getfiles()
  });

  }


  getfilessuc(){
    this.files = [];
    this.util.showloading('Please Wait..','Loading Files..!');
   this.api.getfilechanges('QADepartment').subscribe(data=>{
    this.files = data;
    this.updateResults();
    this.updateResults();
    this.util.dismissAlert();
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
      return 'far fa-file-excel fa-3x col-green'
    }

  }

  access(){
    let data = JSON.parse(localStorage.getItem('info'))
    return data;
  }


  deleteconfirm(docid){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletedoc(docid);
      }
    })


  }

  deletedoc(docid){
    this.api.deletedoc(docid,'QADepartment').then(data=>{
      this.util.successalert('Deleted!','Your file has been deleted.');
    }).catch(error=>{
      console.log(error);
    })
  }

  viewdoc(url){
    const dialogRef = this.dialogModel.open(DocviewerComponent, {
      width: '80%',
      height:'95%',
      disableClose: true,
      data:url
    });

    this.dialogModel.afterAllClosed.subscribe(() => {
      // Do stuff after the dialog has closed
     // this.getfiles()
  });


  }

  openshare(docdata){
    const dialogRef = this.dialogModel.open(ShareComponent, {
      width: '40%',
      height:'45%',
      disableClose: false,
      data:docdata,
    });

    this.dialogModel.afterAllClosed.subscribe(() => {
      // Do stuff after the dialog has closed
     // this.getfiles()
  });

  }

}
