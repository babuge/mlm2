import { Component, ViewChild, ElementRef,Input} from '@angular/core';
import { NavController,Refresher,App,ViewController,Content} from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { StorageService } from '../../providers/storageService';
import { SharePage} from '../../pages/invitate_share/invitate_share';
import { ShowmePage} from '../../pages/showme/showme';
import { WholookmePage} from '../../pages/wholookme/wholookme';
import { RulePage} from '../../pages/rule/rule';
import {ContactPage} from '../../pages/contact/contact';
import { StrategyPage} from '../../pages/strategy/strategy';
import { MyDataPage} from '../../pages/myData/myData';
import { MoneyPage } from '../../pages/getMoney/getMoney';
import {GoodsinfoPage} from '../../pages/goodsinfo/goodsinfo';
import {TabsService} from '../../providers/tabs-server';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[StorageService]
})
export class HomePage{
@ViewChild(Content) content:Content;
  @Input("slides") slides: Array<{adimg:any}>; 
  @ViewChild('progress') progress:ElementRef;  
  public User:any;uid;showUser:boolean=false;showslide:boolean=false;
  public Pting:Array<{goods:any,tatols:any}>;
  public imga:string='assets/images/banner1.png';imgb:string='assets/images/banner1.png';imgc:string='assets/images/banner1.png';
  public haveUser:string="assets/images/logo.png";urlHot:string;
  public refreshTxt:string='更新中...';moreInfo="更多信息...";wwwName:string="http://www.363app.com";
  public loading:any;showPting:boolean=false;myTopSlideOptions: any;setTime:any;
  public hotTeam:boolean=false;showPage:boolean=false;showmg=false;hasmore=true;run=false;showTuiJian=false;   
  public page:number=1;//模拟用户信息
  public urls:string;
  public urlpting:string;
  items = [];itemsa=[];Hot=[];imgArr:Array<{"adimg":any}>;mySlideOptions;
  constructor(public navCtrl: NavController,public homemodel: HomeModel,
 public storage:StorageService,public appCtr:App,public viewCtrl:ViewController,public tabCtrl:TabsService) {
   this.User=[];
 }
  ngOnInit(){//页面加载完成后自己调用==>页面初始化时
  }
  outrun(){
    this.showmg=false;
  }  
  showBanner(mm:any){
    this.showslide=true;
    this.slides=mm;
    
  }
  ionViewDidLoad(){//页面加载完  
      //轮播图
 this.homemodel.postHome(this.wwwName+"/api/advert",JSON.stringify({}),(res)=>{
  if(res.trim()==='EMPTY'){return;}
  this.showBanner(JSON.parse(res));  
});
    this.urls='http://www.363app.com/Api/User/userPorfit/uid/'+this.storage.read("UserId");
  this.urlHot='http://363app.com/Api/SpellTeam/teamhoting/uid/';
  //get请求
  this.homemodel.getAll(this.urls,(res)=>{    
  this.showUser=true;
  this.User=res;  
  this.storage.write('UserId',res.id);
  this.storage.write('UserImg',res.porfile);
  this.storage.write("UserName",res.username);
  this.storage.write('UserPhone',res.phone);
  this.haveUser=this.wwwName+this.storage.read("UserImg");
  

});
  //Pting拼团ing
    this.urlpting='http://363app.com/Api/SpellTeam/selteaming';
    let dataPting={'uid':this.storage.read("UserId")}
  this.homemodel.postHome(this.urlpting,JSON.stringify(dataPting),(res)=>{  
     if(res.trim()==='PROERROR'){
     this.hotTeam=false;
  console.log(res)
  return;
  }
if(res.trim()==='EMPTY'){
     this.hotTeam=false;
  console.log(res);
  return;
  } 
  this.showPting=true;  
  this.Pting=JSON.parse(res);  
  });
  //预热    
  let data={'uid':this.storage.read("UserId")}
  this.homemodel.postHome(this.urlHot,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
     this.hotTeam=false;
  console.log(res)
  return;
  }
  if(res==='EMPTY'){
     this.hotTeam=false;
  console.log(res);
  return;
  }   
  this.hotTeam=true;
  this.Hot=JSON.parse(res);
  })

  //推荐
 let url1=this.wwwName+"/Api/Goods/istjteam";
  let datas1={'currentPage':this.page}
  this.homemodel.postHome(url1,JSON.stringify(datas1),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      this.page--;      
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
       this.page--; 

      }
      else{   
      this.moreInfo="查看更多...";
      this.showTuiJian=true;
      this.page++;
      this.items=JSON.parse(res);      
      }
      })
  }
 
  // 销毁组件时 如跑表
 ngOnDestroy() { }

  //上拉添加    
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.run=false;
    this.hasmore=true;
    if(!this.run){
    setTimeout(then => {
      this.run=true;
      this.page++;
    let url=this.wwwName+"/Api/Goods/istjteam";
    let datas={'currentPage':this.page}
    this.homemodel.postHome(url,JSON.stringify(datas),(res)=>{ 
    
   if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      this.page--;      
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
       this.page--; 
      }
      else{   
      this.moreInfo="查看更多...";
      for(let i=0;i<JSON.parse(res).length;i++){
      this.items.push(JSON.parse(res)[i]);
      }
      }
      infiniteScroll.complete();
      })
    }, 3000);
    }
  }
//下拉更新
 doRefresh(refresher: Refresher) {
    this.refreshTxt='正在刷新...';
    setTimeout(() => {
      console.log('Async operation has ended');
      this.refreshTxt='网络不给力啊~~';
      setTimeout(()=>{
          refresher.complete();
      },3000)
    }, 17000);
  this.homemodel.getAll(this.urls,(res)=>{
      console.log(res);
      this.User=[];
      this.User=res;  
      this.storage.write('UserImg',res.porfile);
      this.haveUser=this.wwwName+this.storage.read("UserImg");    
      refresher.complete();
  })
  console.log('Begin async operation',refresher);
  }

  //click....
public showa:boolean=true;
  //to somePage
goToPage(page:string,goodsId:string,ptid:string){
  switch (page){
    case 'showme':{
      this.navCtrl.push(ShowmePage, {id:goodsId,ptId:ptid});
    break;}
    case 'wholookme':{
      this.navCtrl.push(WholookmePage, {id:goodsId,ptId:ptid});
    break;}
    case 'invitation':{
      this.navCtrl.push(SharePage, {id:goodsId,ptId:ptid});
    break;}
    case 'contact':{      
     this.appCtr.getRootNav().push(ContactPage);
    break;
    }
  }

}
//hotTeam
  callFrinds(str:string){
    this.navCtrl.push(SharePage, {ptid:str});
  }
//to rulePage
  ptRule(){
  this.navCtrl.push(RulePage,{});
}
//to StrategyPage
toStrategy(){
  this.navCtrl.push(StrategyPage,{});
}
//to mydata
lookMyself(){
  this.appCtr.getRootNav().push(MyDataPage,{User:this.User,UserImg:this.haveUser});
}
//to myMoney
toMyMoney(){
  this.appCtr.getRootNav().push(MoneyPage);
}
//to goodsInfo
toGoodsInfo(prodId:string){
  this.navCtrl.push(GoodsinfoPage,{'goodId':prodId})
}






}
