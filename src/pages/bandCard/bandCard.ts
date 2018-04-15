import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';
import {CardChangePage} from '../../pages/bankCardChg/bankCardChg';

@Component({
  selector: 'bandCard-page',
  templateUrl: 'bandCard.html'
})
export class BandCardPage {
    public showNow:boolean=false;
    public hideNow:boolean=false;
    public BankCarCode:string;BankName:string;
    public UserImg:string;uid:string;phone;userName:string;url:string;bgImg1:string;BgImgUrl:string;
    constructor(public navCtr:NavController,public storage:StorageService,public unithttp:unitHttp){

    }
  ionViewDidLoad() {//调用push进入时就会触发
    this.UserImg=this.unithttp.getIp().images+this.storage.read("UserImg");
    this.uid=""+this.storage.read('UserId');
    this.userName=""+this.storage.read('UserName');
    this.phone=""+this.storage.read('UserPhone');
    this.bgImg1="assets/images/apliy_baby.jpg";
    this.url=this.unithttp.getIp().code+'/Api/User/selbanknum';
    let data={'uid':this.uid}
    this.unithttp.post(this.url,JSON.stringify(data),(res)=>{
      if(res.trim()=='PROERROR'){
        console.log(res);
        return;
      }
      this.showNow=true; 
      this.hideNow=!this.showNow;
      this.BankCarCode=JSON.parse(res).banknum;
      this.BankName=JSON.parse(res).banktype;
    })
 
  }
  ionViewWillUnload(){//调用pop出去时触发 这个销毁
 


  }
  addCard(){
    this.navCtr.push(CardChangePage);
  }  
  editorCard(){
    this.navCtr.push(CardChangePage);
  }


     




}