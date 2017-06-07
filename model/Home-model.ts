import { HttpServer } from '../providers/http-server';
import { ICallBack } from '../interface/Index';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeModel {
  private _callbackMessage:ICallBack;
  constructor(public http: HttpServer) {
      this._callbackMessage = {
        code:500,
        message: null,
        status:500,
        _body:null
      }
  }
  getHome=(url,data,callback:Function):any =>{
    this.http.doPost(url,data).then((res:ICallBack)=>{
      console.log(res);    
      callback(res);
        
    });
  }
  
    postHome=(url,data,callback:Function):any =>{
    this.http.doPosts(url,data).then((res:any)=>{  
      callback(res._body);
        
    });
  }
  getAll = (url,callback:Function):any => {
    this.http.doGet(url).then((res:ICallBack)=>{
         console.log(res);
         callback(res);
        
    });
  }
    getAlls = (url,callback:Function):any => {
    this.http.doGet(url).then((res:any)=>{
         console.log(res._body);
         callback(res._body);
    });
  }
  //   getAll = (url,callback:Function):any => {
  //   this.http.doGet(url).then((res:any)=>{
  //        console.log(res);
  //        callback(res._body);
        
  //   });
  // }
}
