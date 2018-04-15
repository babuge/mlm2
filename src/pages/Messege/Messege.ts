import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MessegeSubPage} from '../../pages/MessegeSub/MessegeSub';
import { unitHttp } from '../../model/unitHttp';
@Component({
  selector: 'Messege-page',
  templateUrl: 'Messege.html'
})
export class MessegePage {
    public news:Array<{title:string,content:string,addtime:string}>;url:string;
    constructor(public navCtr:NavController,public unithttp:unitHttp){

    }
  toBack(){
    this.navCtr.pop();
  }
    ionViewDidLoad(){//页面加载完  
    this.url=this.unithttp.getIp().code+"/Api/Sysmessage/selsysmsg";
    this.unithttp.get(this.url,"",(res)=>{  
      if(!res){
        return;
      }  
        this.news=res;
    })
  


  }
goNext(num:number,title,content,addtime){
    this.navCtr.push(MessegeSubPage,{num:num,title:title,content:content,addtime:addtime});
}



}