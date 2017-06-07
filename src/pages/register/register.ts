import { Component} from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import {LoginPage} from '../../pages/logIn/login';
import { StorageService } from '../../providers/storageService';
@Component({
  selector: 'Reg-page',
  templateUrl: 'register.html'
})
export class RegPage{
    public url:string="";uid:string;phone:number;passWord:string;repassWord:string;altShow:boolean=false;altTxt:string;imgSrc:string="assets/images/logo.jpg";
    constructor(public navCtr:NavController,public homemodel:HomeModel,public storage:StorageService,public altCtrl:AlertController){      
    }
    ionViewDidLoad(){//页面加载完  
      
    //   this.storage.write('UserId',res.id);
    //   this.storage.write('UserImg',res.porfile);
    //   this.storage.write("UserName",res.username);
      // 刷新txt

    }
    
    submite(phone,password){
 
    //用户名的正则
    let str="^[0-9a-z]{6,11}$";
    let stra="^1[34578][0-9]{9}$";
    let reg=new RegExp(str,"i");
    let rega=new RegExp(stra,"g");
    if(!rega.test(phone)){
           
       alert("手机号格式不正确");
       this.altShow=true;
      this.altTxt="手机号格式不正确"; 
       return;
    }
    if(!reg.test(password)){
       
      alert("密码格式不正确！数字，下划线，字母的6~11位密码！");
       this.altShow=true;
       this.altTxt="密码格式不正确！数字，下划线，字母的6~11位密码！";
      return;
    }
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

    //  let alert = this.altCtrl.create({
    //       title: '登录错误',
    //       subTitle: '11111 ',
    //       buttons: ['OK']
    //       });
    //       alert.present();
    //     }

    this.navCtr.push(LoginPage);
    }
    goLog(){
        this.navCtr.push(LoginPage);
    }





}