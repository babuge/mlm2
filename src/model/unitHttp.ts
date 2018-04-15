import { HttpServer } from '../providers/http-server';
// import { ICallBack } from '../interface/Index';
import { Injectable } from '@angular/core';

@Injectable()
export class unitHttp {
  private environment = "dev";//dev or rel
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
    if (this.environment === "dev") {
      return {
        images: "http://img.dev.babuge.com",
        code: "http://code.dev.babuge.com",
        video: "http://video.dev.babuge.com",
        threeD: "http://3d.dev.babuge.com"
      }
    }
    if (this.environment === "rel") {
      return {
        images: "http://img.rel.babuge.com",
        code: "http://code.rel.babuge.com",
        video: "http://video.rel.babuge.com",
        threeD: "http://3d.rel.babuge.com"
      }
    }

  }
  public setEnvironment(str: "dev" | "rel") {
    this.environment = str;
  }


}
