import { Component} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// import { unitHttp } from '../../model/unitHttp';
// import { StorageService } from '../../providers/storageService';


@Component({
  selector: 'MessegeSub-page',
  templateUrl: 'MessegeSub.html'
})
export class MessegeSubPage {
    public url:string="";
    public title:string;content:string;
    constructor(public navCtr:NavController,public navparams:NavParams){
      
    }
    ionViewDidLoad(){//页面加载完  
      this.title=this.navparams.get("title");
      this.content=this.navparams.get("content");
    }

     toBack(){
       this.navCtr.pop();
     }






}