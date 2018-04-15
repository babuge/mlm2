import { Component } from '@angular/core';
import { NavController,NavParams,AlertController} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
// import { FileUploadOptions } from 'ionic-native';
import {AdressPage} from '../../pages/addAdress/addAdress';
import {GoodsinfoPage} from '../../pages/goodsinfo/goodsinfo';
@Component({
  selector: 'mydata-page',
  templateUrl: 'myData.html'
})
export class MyDataPage {
    public UserImg:string='assets/images/logo.png';Hosi=[];
    public photoShow:boolean=false;photoShowT:boolean=false;profilePicture: any="assets/images/logo.png";
      public path:string;userId;setPass:boolean;old:string;newp:string;reNewp:string;userName:string;phone:string;
    constructor(public navCtr:NavController,public params:NavParams,public alertCtr:AlertController,
      public storage:StorageService,public unithttp:unitHttp,private camera: Camera,
      private transfer: FileTransfer){

      // {User:this.Users,UserImg:this.UserImg}
    }
      ionViewDidLoad(){
      this.UserImg=this.unithttp.getIp().images+this.storage.read('UserImg');
      this.profilePicture=this.UserImg;
      this.userId=this.storage.read('UserId');
      this.userName=""+this.storage.read("UserName");
      this.phone=''+this.storage.read("UserPhone");
      console.log(this.userName);
      let urls=this.unithttp.getIp().code+'/Api/SpellTeam/teamRecord';
      let data={'uid':this.userId}
       this.unithttp.post(urls,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      return;
      }
      else{   
      this.Hosi=JSON.parse(res);     
      console.log(res);
      }return;
      })
      }
      // 销毁组件时 如跑表,隐藏flexd
      ngOnDestroy() {
          this.photoShow=false;
          this.photoShowT=false;
          this.setPass=false;
      }

    showAlert(data) {
    let alert = this.alertCtr.create({
      title: '提示',
      cssClass: 'myData.scss',
      subTitle:data,
      buttons: ['确定']
    });
    alert.present();
  }
  //to addAdress
    setAdress(){
      this.navCtr.push(AdressPage);

  }
    //show 
    show(){   
      this.photoShow=!this.photoShow;
      this.photoShowT=this.photoShow;
      this.setPass=this.photoShow;
    }
    showPoto(){
      this.photoShow=!this.photoShow;
      this.photoShowT=this.photoShow;
    }
    //to set password
    setPassword(){
      this.photoShow=!this.photoShow;
      this.setPass=this.photoShow;
      
    }
    //提交密码
    pushPass(){
        this.photoShow=!this.photoShow;
      this.setPass=this.photoShow;
    }
    toBack(){
       this.navCtr.pop();
     }
     //to testpage

     toCholose(){
      const options: CameraOptions = {
        quality: 100,
        sourceType:0,//0对应的值为PHOTOLIBRARY ，即打开相册
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 400,                                        //照片宽度
        targetHeight: 400, 
        // allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
      }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;
      this.profilePicture=base64Image;
      this.login();
    }, (err) => {
      // Handle error
    });
     }


   //相机事件
   
   toCamera(){
     var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery

      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 400,                                        //照片宽度
      targetHeight: 400, 
      saveToPhotoAlbum:true,
      sourceType:this.camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
      allowEdit: false,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    /**
     * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
     */
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;//给全局的文件路径赋值。
      this.profilePicture=base64Image;//给image设置source。
    /*  this.zone.run(() => this.image = base64Image);*/
    this.login();
    }, (err) => {
      // Handle error，出错后，在此打印出错的信息。
      // alert( err.toString());
    });
   }

  
  login() {
    const fileTransfer: FileTransferObject = this.transfer.create();
      let options: FileUploadOptions = {
         fileKey: 'file',
         fileName: 'name.jpg',
         headers: {}
      }
      let reqUri = this.unithttp.getIp().code+"/Api/User/upload/uid/"+this.userId;
      //第一个参数是文件的路径，第二个参数是服务器的url，第二个参数也可以是encodeURI(reqUri)
      fileTransfer.upload(this.path, reqUri, options)
       .then((data:any) => {
        this.photoShow=false;
        this.photoShowT=false;
        if(data=="ERROR"){
          console.log(data.response);
        }else if(data=="PROERROR"){
           console.log(data.response);
        }else{
          var saveImg=data.response;
          this.storage.write('UserImg',saveImg.trim());
          this.UserImg=this.unithttp.getIp().images+saveImg.trim();
        }
      }, (err) => {
    alert("出错啦");
      });
  }
  loockH(prodId:string){
    this.navCtr.push(GoodsinfoPage,{'goodId':prodId,'ishostory':'true'});
  }
}