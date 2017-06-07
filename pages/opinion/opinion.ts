import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';


@Component({
  selector: 'Opinion-page',
  templateUrl: 'opinion.html'
})
export class OpinionPage{
    public url:string="";texts:string;uid:string;
    constructor(public navCtr:NavController,public homemodel:HomeModel,public storage:StorageService){
      
    }
    ionViewDidLoad(){//页面加载完  
     
      // 刷新txt

    }
    submite(){
      this.url="http://www.363app.com/Api/Feedback/addOpinion";
      this.uid=""+this.storage.read("UserId");
   
      //post请求   
     let data={"uid":this.uid,content:this.texts}
      this.homemodel.postHome(this.url,JSON.stringify(data),(res)=>{
        if(res==="ERROR"||res==="PROERROR"){
          console.log("反馈失败！");
          return;
        }
        alert("反馈成功！");
      });
    }
     toBack(){
       this.navCtr.pop();
     }






}