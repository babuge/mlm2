import { Component} from '@angular/core';
import { NavController, Refresher} from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';
@Component({
  selector: 'MtoBankH-page',
  templateUrl: 'MtoBankH.html'
})
export class MtoBankHPage {
    public Users:Array<{title:string,username:string,phone:string}>;wwwName='http://www.363app.com';

    public uid:string;refreshTxt:string;hosit=[];
    constructor(public navCtr:NavController,public storage:StorageService,public homemodel:HomeModel){
    this.Users=[]; 
         
    
    }    

   
   ionViewDidLoad(){
          //请求提现记录
           let urls=this.wwwName+'/Api/Withdrawals/wdlRecord';
           let data={'uid':this.storage.read('UserId')}
           this.homemodel.postHome(urls,JSON.stringify(data),(res)=>{
              if(res.trim()=='PROERROR'){
                console.log('参数错误');
                return;
              }
              this.hosit=JSON.parse(res);   
           })


    }

   ionViewWillUnload(){//调用pop出去时触发 这个销毁
  }

  //下拉更新
 doRefresh(refresher: Refresher) {
    this.refreshTxt='正在刷新...';
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }


}