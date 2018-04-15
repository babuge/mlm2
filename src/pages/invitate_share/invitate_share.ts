import { Component} from '@angular/core';
import {NavController,NavParams,ActionSheetController,AlertController} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';
import {InvitPage} from '../../pages/invitation/invitation';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
// import { PhotoViewer } from 'ionic-native' externalRootDirectory;
@Component({
  selector: 'Share-page',
  templateUrl: 'invitate_share.html'
})
export class SharePage {
  
    public ptid:string;uid:string;showImgs:boolean=false;
    public shareImg:string="";
    public showQust:boolean=false;showPting:boolean=false;imgName:string="";saveMsg:string="保存中...";
    public qust=[];ptInfo:any;public set:any;alertC:any;setInt:any;timer:number=0;
    constructor(public params:NavParams,public navCtr:NavController,private unithttp:unitHttp,
    public actionSheetCtrl:ActionSheetController,public storage:StorageService,public alertCtrl:AlertController,
    private transfer: FileTransfer, private file: File){}
    ionViewDidLoad(){
       this.ptid=this.params.get('ptId');
       this.uid=this.storage.read("UserId")+"";
      let urlqust=this.unithttp.getIp().code+"/Api/Question/selUserques";
      let dataQust={uid:this.storage.read("UserId")}
      this.unithttp.post(urlqust,JSON.stringify(dataQust),(res)=>{
        this.showQust=true;
        this.qust=JSON.parse(res);
      });
      let urlpt=this.unithttp.getIp().code+"/Api/SpellTeam/selteambyid";
      let datapt={ptid:this.ptid}
      this.unithttp.post(urlpt,JSON.stringify(datapt),(res)=>{
        this.showPting=true;
        this.ptInfo=JSON.parse(res);
      });
      let urlShare=this.unithttp.getIp().code+"/Api/Qrcode/index";
      let dataShare={uid:this.storage.read("UserId"),ptid:this.ptid}
      this.unithttp.post(urlShare,JSON.stringify(dataShare),(res)=>{
        this.shareImg=this.unithttp.getIp().images+JSON.parse(res);
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
    const fileTransfer: FileTransferObject = this.transfer.create();
    let url = this.shareImg;
    let path='/sdcard/DCIM/';
    // let option={};
    fileTransfer.download(url,path+image).then((entry)=>{
      this.saveMsg="图片已保存至:"+entry.toURL();   
      this.alertC=this.alertCtrl.create({
      cssClass: 'invitate_share.scss alertas',
      subTitle :this.saveMsg });
    }).catch((err)=>{
      this.saveMsg="保存失败";
      this.alertC=this.alertCtrl.create({
      cssClass: 'invitate_share.scss',
      enableBackdropDismiss:true,
      buttons: [{
      text:this.saveMsg,
      cssClass:'altSavea',
      }]
    });
   
  })

  }





















}