import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private afs : AngularFirestore

  ) {

  }


  createfile(id,data,dep){
   return this.afs.collection(dep).doc(id).set(data);
  }


  getfiles(dep){
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection(dep).get().subscribe((prof)=>{
        let data = prof.docs.map(element=>{
          let item = element.data()
          return item;
        })
        resolve(data)
      },error=>{
        reject(error)
      }
      )
    })
  }

  getfilechanges(dep){
    return this.afs.collection(dep,ref=>ref.orderBy("Date","desc")).valueChanges();
  }

  deletedoc(docid,dep){
    return this.afs.collection(dep).doc(docid).delete();
  }

  sharerecord(id,data){
    return this.afs.collection('SharedDocs').doc(id).set(data);
  }

  public getshareddocdetails(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('SharedDocs').doc(id).get().subscribe((doc: any) => {
        resolve(doc.data());
      }, error => {
        reject(error);
      });
    });
  }

  savechatsessions(id,data){
    return this.afs.collection('ChatSessions').doc(id).set(data);
  }

  getchatresults(){

    return  this.afs.collection('ChatSessions',ref=>ref.orderBy("Date","desc")).valueChanges();
    /*return new Promise<any>((resolve,reject)=>{
      this.afs.collection('ChatSessions').get().subscribe((prof)=>{
        let data = prof.docs.map(element=>{
          let item = element.data()
          return item;
        })
        resolve(data)
      },error=>{
        reject(error)
      }
      )
    })*/

  }



}
