import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import {ApiService} from'../../services/firebase/api.service';
import {UtilService} from'../../services/util/util.service';

export interface FILE {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-dropper',
  templateUrl: './dropper.component.html',
  styleUrls: ['./dropper.component.css']
})
export class DropperComponent implements OnInit {


  ngFireUploadTask: AngularFireUploadTask;
  progressNum: Observable<number>;
  progressSnapshot: Observable<any>;
  fileUploadedPath: Observable<string>;
  files: Observable<FILE[]>;

  FileName: string;
  FileSize: number;
  selectedFile: FileList;

  public uplaodform: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private api : ApiService,
    private util: UtilService,
    public dialogRef: MatDialogRef<DropperComponent>,
    private angularFireStorage: AngularFireStorage,
  ) {

   }

  ngOnInit(): void {
   this.initform();

  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  onSubmitClick() {
   this.fileUpload(this.selectedFile);
  }

  onSelect(event) {
    console.log(event);
   // this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    //this.files.splice(this.files.indexOf(event), 1);
  }

  initform() :void{
    this.uplaodform = this.fb.group({
      title: ['',[Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
      ],
      author: ['',[Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
      ],
    });

  }

  get f(){
    return this.uplaodform.controls
  }


selectFile(event): void {
    this.selectedFile = event.target.files;
}

async fileUpload(event: FileList) {

  const file = event.item(0)

  this.FileName = file.name;
  const fileStoragePath = `File/HrDepartment/${new Date().getTime()}_${file.name}`;
  const imageRef = this.angularFireStorage.ref(fileStoragePath);
  this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);
  this.progressNum = this.ngFireUploadTask.percentageChanges();
   (await this.ngFireUploadTask).ref.getDownloadURL().then(url=>{
     //console.log(url);
     let id = this.util.createid();
     let dataa = {
        id:id,
        title:this.f.title.value,
        author: this.f.author.value,
        filepath:url ,
        FileName:file.name,
        Date:Date.now(),
        Uid:localStorage.getItem('uid'),
        type: this.FileName.split('?')[0].split('.').pop()
     }
     this.createdoc(id,dataa);
   })

 /* this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
    finalize(() => {
      this.fileUploadedPath = imageRef.getDownloadURL();

      this.fileUploadedPath.subscribe(resp=>{
        this.fileStorage({
          name: file.name,
          filepath: resp,
          size: this.FileSize
        });
        this.isImgUploading = false;
        this.isImgUploaded = true;
      },error => {
        console.log(error);
      })
    }),
    tap(snap => {
        this.FileSize = snap.totalBytes;
    })
  )*/

}


createdoc(id,data){
  this.api.createfile(id,data,'HRDepartment').then(data=>{
    console.log('file created');
    this.dialogRef.close();
  }).catch(error=>{
    console.log('file not created');
  })
}








 /* //Uplaod To FireStoreage
downloadableURL = '';
task: AngularFireUploadTask;
async uplaodfile(basePath,file){

  if (file) {
    const filePath = `${basePath}/${file.name}`+Date.now();  // path at which image will be stored in the firebase storage
    this.task =  this.storeage.upload(filePath, file);    // upload task
    this.progressval = this.task.percentageChanges();
    console.log( this.progressval);
    (await this.task).ref.getDownloadURL().then(data=>{
      this.fileurl = data;
      console.log( this.fileurl);
    });

  } else {
    alert('No images selected');
    return this.downloadableURL = '';
  }
}*/

}
