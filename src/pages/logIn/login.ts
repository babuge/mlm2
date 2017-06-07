import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';
import {TabsPage} from '../../pages/tabs/tabs';
import {RegPage} from '../../pages/register/register';
@Component({
  selector: 'Login-page',
  templateUrl: 'login.html'
})
export class LoginPage{
    public url:string="";uid:string;phone:number;passWord:string;imgSrc:string="assets/images/logo.jpg";
    constructor(public navCtr:NavController,public homemodel:HomeModel,public storage:StorageService){
      
    }
    ionViewDidLoad(){//页面加载完  
      
    //   this.storage.write('UserId',res.id);
    //   this.storage.write('UserImg',res.porfile);
    //   this.storage.write("UserName",res.username);
      // 刷新txt

    }
    submite(){
    this.storage.write('UserId',"1");
    this.navCtr.push(TabsPage);
    //   this.url="http://www.363app.com/Api/Feedback/addOpinion";
    //   this.uid=""+this.storage.read("UserId");
   
    //   //post请求   
    //  let data={url}
    //   this.homemodel.postHome(this.url,JSON.stringify(data),(res)=>{
    //     if(res==="ERROR"||res==="PROERROR"){
    //       console.log("反馈失败！");
    //       return;
    //     }
    //     alert("反馈成功！");
    //   });
    }
    goReg(){
      this.navCtr.push(RegPage);
    }





}