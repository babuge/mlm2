import { Component} from '@angular/core';
import { NavController, Refresher} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';
@Component({
  selector: 'MtoBankH-page',
  templateUrl: 'MtoBankH.html'
})
export class MtoBankHPage {
    public Users:Array<{title:string,username:string,phone:string}>;

    public uid:string;refreshTxt:string;hosit=[];
    constructor(public navCtr:NavController,public storage:StorageService,public unithttp:unitHttp){
    this.Users=[]; 
         
    
    }    

   
   ionViewDidLoad(){
          //请求提现记录
           let urls=this.unithttp.getIp().code+'/Api/Withdrawals/wdlRecord';
           let data={'uid':this.storage.read('UserId')}
           this.unithttp.post(urls,JSON.stringify(data),(res)=>{
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