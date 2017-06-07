import { Component,Input} from '@angular/core';
import { NavController,ScrollEvent} from 'ionic-angular';
import {GoodsinfoPage} from '../../pages/goodsinfo/goodsinfo';
import { HomeModel } from '../../model/Home-model';
import {TabsService} from '../../providers/tabs-server';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
     @Input("slides") slides: Array<{"adimg":any}>; 
  items=[];
  public Goods = null;
  public GoodsIndex = null;
  public showCar = false;hasmore=true;run=false;showmg=false;imgd:string="assets/images/banner1.png";imge:string="assets/images/banner1.png";imgf:string="assets/images/banner1.png";
   public wwwName:string='http://www.363app.com';moreInfo="更多信息...";
   public classfiyId:string="0";showslide:boolean=false;hiden:boolean=false;
  public page:number=1;repage:number=1;  sxImg:string;theOder:string;
  constructor(public navCtrl: NavController,public homemodel:HomeModel,public tabCtrl:TabsService) {

  }
    //滚动监听
  onScroll(ev: ScrollEvent) {
    if(ev.scrollTop>318){
      this.hiden=true;
    }else{
      this.hiden=false;
    }
}
   ngAfterViewInit() {

   }
  
   ngOnInit() {  
    
  }  
  // onScroll(ev: ScrollEvent) {
  // ev.domWrite(() => {
  // console.log(ev.scrollTop);
  // });
  // }
    //启动轮播
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
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
    
      }
      else if(res==='EMPTY'){
      console.log(res);

      }
      else{   
      this.page++;
      this.classfiyId='0';
      this.items=JSON.parse(res);
      }
      })

    }
//outtime
outrun(){
  this.showmg=false;
}    
//to goodsInfo
toGoodsInfo(prodId:string){
  this.navCtrl.push(GoodsinfoPage,{'goodId':prodId});
}
// 上拉
  doInfinite2(infiniteScroll){
    this.run=false;
    console.log('Begin async operation');
    setTimeout(then => {
      this.page++;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':this.classfiyId,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
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
//分类请求 1~8分别是服饰、
cloth(str:string){
  this.items=[];
  this.repage=this.page;
  this.page=1;
  switch (str){
  case '1':{
  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
      console.log(res)
        this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      }
      else{   
      this.page++;
    this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '2':{
  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
            this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
      return;
      }
      else if(res==='EMPTY'){
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
       this.items=[];
      return;
      }
      else{   
      this.page++;
        this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '3':{

  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
            this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      this.items=[];
      console.log(res);
      return;
      }
      else{   
      this.page++;
      this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '4':{

  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
            this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
       this.items=[];
      return;
      }
      else{   
      this.page++;
      this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '5':{

  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
             this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
       this.items=[];
      return;
      }
      else{   
      this.page++;
      this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '6':{

  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
             this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
       this.items=[];
      return;
      }
      else{   
      this.page++;
      this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '7':{

  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
             this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      this.moreInfo="没有更多消息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
       this.items=[];
      return;
      }
      else{   
      this.page++;
      this.items=JSON.parse(res);
      }return;
      })

  break;
  }
  case '8':{

  this.classfiyId=str;
  let url=this.wwwName+"/Api/Goods/selGoodsBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
             this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
                this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);    
      this.hasmore=false;
      console.log(res);
       this.items=[];
      return;
      }
      else{   
      this.page++;
      this.items=JSON.parse(res);
      }return;
      })

  break;
  }    
  }
}
//商品
   
  ACTIVE_GOODS(item){
    if(item.num>0){
      this.GoodsIndex = item;
      this.sxImg=item.imgpath;
      this.theOder='已选款式:'+item.attname;
    }
  }
  hideCarFn(){
    this.tabCtrl.show();
        this.showCar = !this.showCar;
  }
  showCarFn(prdId){
    this.tabCtrl.hide();
    this.theOder='请选择款式';
    let url=this.wwwName+"/Api/Goods/selgoodsPro";
    let data={'gid':prdId}
     this.homemodel.postHome(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
       this.showCar=false;
      return;
      }
      else{ 
      this.showCar = !this.showCar;

      this.Goods=JSON.parse(res);
      this.sxImg=this.Goods.goodstotals[0].imgpath;
      }return;
      })
    

    // this.sxImg=Goods[0].imgpath;
  }
  JoinOrder(){
    if(this.GoodsIndex){
      this.showCar = false;
      this.tabCtrl.show();
    }
  }
}
