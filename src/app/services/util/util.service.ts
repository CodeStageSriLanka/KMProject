import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private afs : AngularFirestore
  ) { }


  createid(){
   return this.afs.createId();
  }



  showloading(message1?, message2?){
    Swal.fire({
      title: message1,
      html: message2,

      didOpen: () => {
        Swal.showLoading()

      }
    });
  }

  dismissAlert(){
    Swal.close();
  }

  successalert(title?,message?){
    Swal.fire(
      title,
      message,
      'success'
    )
  }


}
