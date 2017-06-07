import { Component} from '@angular/core';
import { NavController,Refresher,App} from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import {MyDataPage} from '../../pages/myData/myData';
import {MoneyPage} from '../../pages/getMoney/getMoney';
import {MypartnerPage} from '../../pages/mypartner/mypartner';
import {StrategyPage} from '../../pages/strategy/strategy';
import { StorageService } from '../../providers/storageService';
import {MessegePage} from '../../pages/Messege/Messege';
import {OpinionPage} from '../../pages/opinion/opinion';
import {LoginPage} from '../../pages/logIn/login';
// import { HomeModel } from '../../model/Home-model';
@Component({
    selector:'my-homeS', 
    templateUrl:'my-home.html',
 
})
export class MyHomePage{

    public Users:Array<{title:string,id:string}>;wwwName="http://www.363app.com";
    public urls:string="http://363app.com/Api/User/userPorfit/uid/1";
    public UserImg:string='assets/images/logo.png';uid:string;
    constructor(public NavCtrl:NavController,public homemodel:HomeModel,public storage:StorageService,public appCtrl:App){
    this.Users=[];

    }

    ionViewDidLoad(){
       this.homemodel.getAll(this.urls,(res)=>{    
    this.Users=res;
    this.UserImg=this.wwwName+res.porfile;
    this.uid=res.id;
    console.log(this.uid)
    })
    //   this.homemodel.getAllList((res)=>{
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
  this.homemodel.getAll(this.urls,(res)=>{
      this.storage.write('UserImg',res.porfile);
      this.UserImg=this.wwwName+this.storage.read("UserImg");    
      refresher.complete();
  })
  console.log('Begin async operation',refresher);
  }


}