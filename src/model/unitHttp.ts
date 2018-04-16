import { HttpServer } from '../providers/http-server';
// import { ICallBack } from '../interface/Index';
import { Injectable } from '@angular/core';

@Injectable()
export class unitHttp {
  private environment:String = "dev";//dev or rel
  private address:String ="baidu.com";//defuate:baidu.com
  constructor(public http: HttpServer) { }

  public post = (url, data, callback: Function): any => {
    this.http.doPost(url, data).then((res: any) => {
      if (!res) {
        return callback(null);
      }
      callback(res);
    });
  }
  public get = (url, data, callback: Function): any => {
    this.http.doGet(url, data).then((res: any) => {
      if (!res) {
        return callback(null);
      }
      callback(res);
    });
  }
  public getIp() {
    if (this.environment === "dev" ||this.environment === "rel") {
      return {
        images: "http://img."+this.environment+this.address,
        code: "http://code."+this.environment+this.address,
        video: "http://video."+this.environment+this.address,
        threeD: "http://3d."+this.environment+this.address
      }
    }
  }
  public setEnvironment(str: "dev" | "rel") {
    this.environment = str;
  }
  public setAddress(str:String) {
    this.address = str;
  }


}
