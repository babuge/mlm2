import { Component} from '@angular/core';
import {NavController,NavParams,ActionSheetController,AlertController} from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';
import {InvitPage} from '../../pages/invitation/invitation';
import { Transfer} from 'ionic-native';
// import { PhotoViewer } from 'ionic-native' externalRootDirectory;
@Component({
  selector: 'Share-page',
  templateUrl: 'invitate_share.html'
})
export class SharePage {
    public ptid:string;uid:string;showImgs:boolean=false;
    public wwwName:string='http://www.363app.com';shareImg:string="";
    public showQust:boolean=false;showPting:boolean=false;imgName:string="";saveMsg:string="保存中...";
    public qust=[];ptInfo:any;public set:any;alertC:any;setInt:any;timer:number=0;

    constructor(public params:NavParams,public navCtr:NavController,private homemodel:HomeModel,
    public actionSheetCtrl:ActionSheetController,public storage:StorageService,public alertCtrl:AlertController){}
    
    ionViewDidLoad(){
       this.ptid=this.params.get('ptId');
       this.uid=this.storage.read("UserId")+"";
      let urlqust=this.wwwName+"/Api/Question/selUserques";
      let dataQust={uid:this.storage.read("UserId")}
      this.homemodel.postHome(urlqust,JSON.stringify(dataQust),(res)=>{
        this.showQust=true;
        this.qust=JSON.parse(res);
      });
      let urlpt=this.wwwName+"/Api/SpellTeam/selteambyid";
      let datapt={ptid:this.ptid}
      this.homemodel.postHome(urlpt,JSON.stringify(datapt),(res)=>{
        this.showPting=true;
        this.ptInfo=JSON.parse(res);
      });
      let urlShare=this.wwwName+"/Api/Qrcode/index";
      let dataShare={uid:this.storage.read("UserId"),ptid:this.ptid}
      this.homemodel.postHome(urlShare,JSON.stringify(dataShare),(res)=>{
        this.shareImg=this.wwwName+JSON.parse(res);
      });
    }
    toBack(){
       this.navCtr.pop();
    }
    showImg(){
        this.showImgs=!this.showImgs;
    }
    reSet(){
    this.navCtr.push(InvitPage,this.ptid);
    }
    goEnd(){
      
          let actionSheet=this.actionSheetCtrl.create({
          title: '分享给好友',
          cssClass: 'invitate_share.scss',
          buttons: [
          {
          text: '微信',
          cssClass:'btnCart', 
          icon:'mlm-chart',     
          handler: () => {
            console.log('Share clicked');
          }
          },
          {
          text: 'qq',
          cssClass:'btnQq',     
          icon:  'mlm-qq' ,
          handler: () => {
            console.log('Play clicked');
          }
          },
          {
          text: '取消',               
          role: '取消', // will always sort to be on the bottom
          // icon: 'close' ,
          cssClass:'btnClose',
          handler: () => {
            console.log('Cancel clicked');
          }
          }
          ]
          });
          actionSheet.present();

    }

    pressFnO(ve){
      this.timer=2;
      this.set=new Date();
      console.log(this.set);
      this.setInt=setTimeout(then=>this.proFn(),1000);
    }
    alertHide(){
      this.alertC.dismiss();
    }
    pressFnT(ve){
      clearTimeout(this.setInt);//清除定时器
      this.timer=0;//结束时间判断
    }
     proFn(){
      if(this.timer==2){
        console.log("123");
        this.saveMsg='保存到手机'; 
        this.alertC=this.alertCtrl.create({
          cssClass: 'invitate_share.scss',//css文件
          enableBackdropDismiss:true,//点击周围消失
          buttons: [{
            text:this.saveMsg,
            cssClass:'altSave',
            handler:()=>{
               this.imgName="share"+this.shareImg.substring(this.shareImg.length-14,this.shareImg.length);
               this.alertHide();
               this.saveImg(this.imgName);
            }
          }]
        });
        this.alertC.present();
      }
    }

  //存储图片
  saveImg(image){
    const fileTransfers = new Transfer();
    let url = this.shareImg;
    let path='/sdcard/DCIM/';
    // let option={};
    fileTransfers.download(url,path+image,true).then((entry) => {
    this.saveMsg="图片已保存至:"+entry.toURL();   
    this.alertC=this.alertCtrl.create({
    cssClass: 'invitate_share.scss alertas',
    subTitle :this.saveMsg
    });
    this.alertC.present(); 
    this.setInt=setTimeout(then=>this.alertHide(),4000);
    }, (error) => {
    this.saveMsg="保存失败";
    this.alertC=this.alertCtrl.create({
    cssClass: 'invitate_share.scss',
    buttons: [{
    text:this.saveMsg,
    cssClass:'altSavea',
    enableBackdropDismiss:true
    }]
    });
    this.alertC.present();
    this.setInt=setTimeout(then=>this.alertHide(),1500);
    });
  }























}