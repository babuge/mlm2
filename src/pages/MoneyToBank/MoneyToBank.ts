import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';
// import {pipServece} from '../../providers/pipArrEnd';
// import {BandCardPage} from '../../pages/bandCard/bandCard';
@Component({
  selector: 'MoneyToBank-page',
  templateUrl: 'MoneyToBank.html'
})
export class MoneyToBankPage {
    public uid:string;bankShow:boolean=false;wwwName:string='http://www.363app.com';BankInfo=[];Banknum:string;
    nums=[];array:string;endnum:number=4;BanknumEnd:string;inum:number=0;
    public MoneyNum;emassege:string;showEmg:boolean=false;porfit;
    constructor(public navCtr:NavController,public storage:StorageService,public homemodel:HomeModel){
         
    
    }

  errShowFn(){
    this.showEmg=false;
  }  
   
   ionViewDidLoad(){

          this.uid=""+this.storage.read("UserId");
          console.log(this.uid);
            let urlToBank=this.wwwName+'/Api/User/selbanknum';
          let dataToBank={'uid':this.uid};
          this.homemodel.postHome(urlToBank,dataToBank,(res)=>{
            if(res.trim()==='EMPTY'){
            this.bankShow=false;
            console.log(res+"empty");
            alert('请绑定银行卡!');
            this.navCtr.pop();
            return;
            }
            if(res==='PROERROR'){
            this.bankShow=false;
            console.log(res)
            return;
            }
            console.log(res);
            this.bankShow=true;
            this.BankInfo=JSON.parse(res);   
          })
          let urlporfit=this.wwwName+"/Api/User/profit";
          let dataporfit={'uid':this.uid}
          this.homemodel.postHome(urlporfit,dataporfit,(res)=>{            
         
            this.porfit=res;
  
            
          })

      }

     ToBank(){
  
       //的正则
    let stra="^[0-9]{2,11}$";
    // let reg=new RegExp(str,"i");
    let rega=new RegExp(stra,"g");
    if(!rega.test(this.MoneyNum)||this.MoneyNum%100!=0){
      this.emassege='请输入100的整数';
      this.showEmg=true;
       setTimeout(then=>this.errShowFn(),2000);       
       return;
    }
    let urlPost=this.wwwName+'/Api/Withdrawals/withdrawals';
    let dataPost={'uid':this.uid,'money':this.MoneyNum}
    this.homemodel.postHome(urlPost,JSON.stringify(dataPost),(res)=>{
            if(res.trim()==='EMPTY'){
            alert('提现失败！');  
            console.log(res+"empty");   
            this.navCtr.pop();
            return;
            }
            if(res.trim()==='PROERROR'){
    
            alert('未知错误！');
            return;
            }
            if(res.trim()==='ERROR_MONEY'){
              alert("余额不足");
              return;
            }
            alert('提现成功！');
             this.navCtr.pop();
    });
     //成功===

      
       
     }



}