import { Component} from '@angular/core';
import { NavController,Refresher,App} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import {MyDataPage} from '../../pages/myData/myData';
import {MoneyPage} from '../../pages/getMoney/getMoney';
import {MypartnerPage} from '../../pages/mypartner/mypartner';
import {StrategyPage} from '../../pages/strategy/strategy';
import { StorageService } from '../../providers/storageService';
import {MessegePage} from '../../pages/Messege/Messege';
import {OpinionPage} from '../../pages/opinion/opinion';
import {LoginPage} from '../../pages/logIn/login';
// import { unitHttp } from '../../model/unitHttp';
@Component({
    selector:'my-homeS', 
    templateUrl:'my-home.html',
 
})
export class MyHomePage{

    public Users:Array<{title:string,id:string}>;
    public UserImg:string='assets/images/logo.png';uid:string;
    constructor(public NavCtrl:NavController,public unithttp:unitHttp,public storage:StorageService,public appCtrl:App){
    this.Users=[];

    }

    ionViewDidLoad(){
       this.unithttp.get(this.unithttp.getIp().code+"/User/userPorfit/uid/1","",(res)=>{    
    this.Users=res;
    this.UserImg=this.unithttp.getIp().images+res.porfile;
    this.uid=res.id;
    console.log(this.uid)
    })
    //   this.unithttp.getList((res)=>{
    //       console.log(res);
    //       this.List = res.list;
    //   })
  }


    onfrist(){
        this.NavCtrl.push(MyDataPage,{User:this.uid,UserImg:this.UserImg});

    }
      onSecond(){
       this.NavCtrl.push(MessegePage);
    }
      onThrid(){
          this.NavCtrl.push(MoneyPage,{})

    }
      onFourth(){
        this.NavCtrl.push(MypartnerPage,{})

    }
    //to StrategyPage
      onFifth(){
          this.NavCtrl.push(StrategyPage,{});
    }
     onSixth(){
      this.NavCtrl.push(OpinionPage);
    }
 onSeverth(){
      
    }
     onHighth(){
       
    }
    Logout(){
        this.storage.remove("UserId");
        this.storage.remove("UserImg");
        this.storage.remove("UserName");
         this.appCtrl.getRootNav().push(LoginPage);        
    }
//下拉更新
refreshTxt:string;
 doRefresh(refresher: Refresher) {
    this.refreshTxt='正在刷新...';
    setTimeout(then => {
      console.log('Async operation has ended');
      this.refreshTxt='网络不给力啊~~';
      setTimeout(then=>{
          refresher.complete();
      },3000)
    }, 15000);
  this.unithttp.get(this.unithttp.getIp().code+"/User/userPorfit/uid/1","",(res)=>{
      this.storage.write('UserImg',res.porfile);
      this.UserImg=this.unithttp.getIp().code+this.storage.read("UserImg");    
      refresher.complete();
  })
  console.log('Begin async operation',refresher);
  }


}