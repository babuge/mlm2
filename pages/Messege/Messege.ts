import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MessegeSubPage} from '../../pages/MessegeSub/MessegeSub';
import { HomeModel } from '../../model/Home-model';
@Component({
  selector: 'Messege-page',
  templateUrl: 'Messege.html'
})
export class MessegePage {
    public news:Array<{title:string,content:string,addtime:string}>;url:string;
    constructor(public navCtr:NavController,public homemodel:HomeModel){

    }
  toBack(){
    this.navCtr.pop();
  }
    ionViewDidLoad(){//页面加载完  
    this.url="http://www.363app.com/Api/Sysmessage/selsysmsg";
    this.homemodel.getAll(this.url,(res)=>{  
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