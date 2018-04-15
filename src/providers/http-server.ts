import { Injectable } from '@angular/core';
import { HTTP} from '@ionic-native/http';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the HttpServer provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpServer {
  constructor(public http: HTTP) {this.http.setRequestTimeout(20);}
    public doGet(url: string,body:Object) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: headers });
    
    // return this.http.get(url,body, headers).toPromise()
    return this.http.get(url,body, headers)
      .then(res => res)
      .catch(err => {
        this.handleError(err);
      });
  }
  public doPost(url: string, body: Object) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(url, body, headers)
      .then(res =>res )
      .catch(err => {
        this.handleError(err);
      });
  }
  private handleError(error: Response) {
    // return Promise.reject(error.message || error);
    console.log(JSON.stringify(error)||'Server Error');
  }

}
