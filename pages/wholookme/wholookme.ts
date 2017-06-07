import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SharePage} from '../../pages/invitate_share/invitate_share';
import { StorageService } from '../../providers/storageService';
import {HomeModel} from '../../model/Home-model';

/*
  Generated class for the Wholookme page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wholookme',
  templateUrl: 'wholookme.html'
})
export class WholookmePage {
  showFirst  = false;looks=[];looked=[];lookedY=[];
  public lookedAll:Array<{user:any,addtime:any}>;
  showSecond = false;uid:string="";ptId:string="";wwwName="http://www.363app.com";
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage:StorageService,public homemodel:HomeModel) {  }
  ionViewDidLoad() {
    this.uid=""+this.storage.read("UserId");
    this.ptId=""+this.navParams.get("ptId");
    //谁看我
    let urling=this.wwwName+"/Api/Looks/supportCount";
    let dataShow={'uid':this.uid,'ptid':this.ptId}
    this.homemodel.postHome(urling,JSON.stringify(dataShow),(res)=>{
   if(res==='PROERROR'){
        console.log(res);
      }
      else if(res==='EMPTY'){
        console.log(res);

      }
      else{   
        this.looks=JSON.parse(res);
        console.log(res);
      }
    });
    //看过我今天
    let urllooked=this.wwwName+"/Api/Looks/supportToday";
    let datalooked={'uid':this.uid,'ptid':this.ptId}
   this.homemodel.postHome(urllooked,JSON.stringify(datalooked),(res)=>{
   if(res==='PROERROR'){
        console.log(res);
      }
      else if(res==='EMPTY'){
        console.log(res);
      }
      else{   
        this.looked=JSON.parse(res);    
      }
    });
    //看过我昨天
    let urllookY=this.wwwName+"/Api/Looks/supportYesterday";
    let datalookY={'uid':this.uid,'ptid':this.ptId}
   this.homemodel.postHome(urllookY,JSON.stringify(datalookY),(res)=>{
   if(res==='PROERROR'){
        console.log(res);
      }
      else if(res==='EMPTY'){
        console.log(res);

      }
      else{   
        this.lookedY=JSON.parse(res);      
      }
    });
   //看过我所有
    let urllookA=this.wwwName+"/Api/Looks/supportAll";
    let datalookA={'uid':this.uid,'ptid':this.ptId}
   this.homemodel.postHome(urllookA,JSON.stringify(datalookA),(res)=>{
   if(res==='PROERROR'){
        console.log(res);
      }
      else if(res==='EMPTY'){
        console.log(res);

      }
      else{   
        this.lookedAll=JSON.parse(res);    
      }
    });
  }
  showTab(index:number){
    switch (index){
      case 1:{
        if(this.lookedY==[]){this.showFirst=false;}else{
          this.showFirst = !this.showFirst;
        }
        break;
        }
    
      case 2:
        {
        if(this.lookedAll==[]){this.showSecond=false;}else{
        this.showSecond = !this.showSecond;
        }
        break;
        }
    }
  }
    //toShare
  toInvit(){
    this.navCtrl.push(SharePage,{Ptid:this.ptId});
  }

}
