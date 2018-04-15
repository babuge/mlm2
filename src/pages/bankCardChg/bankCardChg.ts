import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';

@Component({
  selector: 'bankCardChg-page',
  templateUrl: 'bankCardChg.html'
})
export class CardChangePage {
    public reBankCode:number;bankCode:string="";
    public gaming: string = "";emassege;
    public BankName:string;BankCarCode:string;
    public uid:string;userName:string;url:string;showEmg:boolean=false;
    constructor(public navCtr:NavController,public storage:StorageService,public unithttp:unitHttp){

    }
  ionViewDidLoad() {
    this.userName=""+this.storage.read("UserName");
  }
errShowFn(){
    this.showEmg=false;
  }  
   
   okFn(){
         console.log(this.gaming);
         if(!this.bankCode||!this.reBankCode||!this.gaming){
                 this.showEmg=true;
                 this.emassege='输入不能为空！'
       setTimeout(then=>this.errShowFn(),2000);   
                return;
         }
         //卡号的正则
        let stra="^[0-9]{10,23}$";     
        // let reg=new RegExp(str,"i");
        let rega=new RegExp(stra,"g");
        if(!rega.test(this.bankCode+"")){
          this.showEmg=true;
          this.emassege="请输入银行卡号！";
          setTimeout(then=>this.errShowFn(),2000);
          return;
        }
        //行号
        let strb="^[\w\u4E00-\u9FA5]{2,10}$"
        let regb=new RegExp(strb,'g');
        if(!regb.test(this.gaming)){
          this.showEmg=true;
          this.emassege='行号格式不正确！';
          setTimeout(then=>this.errShowFn(),2000);
          return;
        }
          this.url=this.unithttp.getIp().code+'/Api/User/setbank';
          let bancode=this.bankCode+"";
          console.log(this.gaming+"---"+this.bankCode+"----"+this.uid);
          let data={'uid':this.storage.read("UserId"),'banktype':this.gaming,'banknum':bancode}
          this.unithttp.post(this.url,JSON.stringify(data),(res)=>{
          if(res.trim()=='PROERROR'){
            alert('未知错误！'); 
          return;
          }
          if(res.trim()=='ERROR'){
            alert('添加失败！');
            return;
          }
          alert('设置成功！');
          this.navCtr.pop();
          })
 
         
     }


     




}