import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharePage} from '../../pages/invitate_share/invitate_share';
import {HomeModel} from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';
@Component({
  selector: 'page-showme',
  templateUrl: 'showme.html'
})
export class ShowmePage {
  showFirst  = false;
  showSecond = false;
  imgPath:string="";wwwName="http://www.363app.com";uid:string="";ptId:string="";looks=[];looked=[];lookedY=[];lookedAll=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public homemodel:HomeModel,public storage:StorageService) {
    this.uid=""+this.storage.read("UserId");
    this.ptId=""+this.navParams.get("ptId");
  }
  ionViewDidLoad() {
    //谁看我
    let urling=this.wwwName+"/Api/Looks/looksCount";
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
    let urllooked=this.wwwName+"/Api/Looks/lookstoday";
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
        console.log(res);
      }
    });
    //看过我昨天
    let urllookY=this.wwwName+"/Api/Looks/looksyesterday";
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
        console.log(res);
      }
    });
   //看过我所有
    let urllookA=this.wwwName+"/Api/Looks/looksall";
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
        console.log(res);
      }
    });
  }
  showTab(index){
    switch (index){
      case 1:
        this.showFirst = !this.showFirst;
      break;
      case 2:
        this.showSecond = !this.showSecond;
      break;      
    }
  }
    //toShare
  toInvit(){
    this.navCtrl.push(SharePage,{'ptid':this.ptId});
  }

}

