import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';
import {BandCardPage} from '../../pages/bandCard/bandCard';
import {MoneyToBankPage} from '../../pages/MoneyToBank/MoneyToBank';
import {MtoBankHPage} from '../../pages/MtoBankH/MtoBankH';
@Component({
  selector: 'getMoney-page',
  templateUrl: 'getMoney.html'
})
export class MoneyPage {
    public Users:Array<{title:string,username:string,phone:string}>;

    public UserImg:string='assets/images/logo.png';public uid:string;profitArr:string='';
    constructor(public navCtr:NavController,public unithttp:unitHttp,public storage:StorageService){
    this.Users=[]; 
         
    
    }
    btnFnc(i:number){
      switch (i){
        case 1:{
          this.navCtr.push(MoneyToBankPage);
          break;
        }
        case 2:{
          this.navCtr.push(MtoBankHPage);
          break;
        }
        case 3:{
          this.navCtr.push(BandCardPage,{});
          break;
        }
      }
    }   
   ionViewDidLoad(){
          this.UserImg=this.unithttp.getIp().code+this.storage.read("UserImg");
          this.uid=""+this.storage.read("UserId");
          console.log(this.uid);
             console.log("123"+"--1--");
          let urlProfit=this.unithttp.getIp().code+'/Api/User/profit';
          let dataProfit={'uid':this.uid}   
          this.unithttp.post(urlProfit,JSON.stringify(dataProfit),(res)=>{
               if(res==='PROERROR'){
                console.log(res)
                return;
                }
                else if(res==='EMPTY'){
                console.log(res); 
                return;
                }
                else{                
                this.profitArr=''+res;
                console.log(res);
                }return;
                }) 


  
      }
  ionViewWillUnload(){//调用pop出去时触发 这个销毁
 console.log("123"+"--12--");


  }
     toBack(){
       this.navCtr.pop();
     }




}