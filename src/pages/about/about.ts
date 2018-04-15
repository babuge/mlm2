import { Component,Input } from '@angular/core';
import { NavController,ScrollEvent } from 'ionic-angular';
import {GoodsinfoPage} from '../../pages/goodsinfo/goodsinfo';
import { unitHttp } from '../../model/unitHttp';
@Component({
  selector: 'page-about ',
  templateUrl: 'about.html'
})
export class AboutPage {
   @Input("slides") slides: Array<{adimg:any}>; 
 public items=[];imgArr:any=[];
 public classfiyId:string="0";moreInfo:string="更多信息...";sxImg="";theOder:string;GoodsInfo=[];
  public Goods = null;
  public GoodsIndex = null;
  public showCar = false;hasmore=true;run=false;showmg=false;hiden=false;showslide:boolean=false;
  public page:number=1;repage:number=1;stateCtrl:string="enabled";
  constructor(public navCtrl: NavController,public unithttp:unitHttp) {
    //是否显示动态时间-timer
  }
  //滚动监听
  onScroll(ev: ScrollEvent) {
    if(ev.scrollTop>318){
      this.hiden=true;
    }else{
      this.hiden=false;
    }
}
  //启动轮播
    showBanner(mm:any){
    this.showslide=true;
    this.slides=mm;
    
  }

    ionViewDidLoad(){//页面加载完 
      //启动轮播
  this.unithttp.post(this.unithttp.getIp().code+"/api/advert",JSON.stringify({}),(res)=>{
    if(res.trim()==='EMPTY'){return;}
    this.showBanner(JSON.parse(res));  
  }); 
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':this.classfiyId,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      console.log(res); 
      return;
      }
      else{   
      this.classfiyId='0';
      this.items=JSON.parse(res);
      }return;
      })
  }

ngAfterViewInit() {
 
   }    
//to goodsInfo
toGoodsInfo(prdId){
  console.log(prdId);
  this.navCtrl.push(GoodsinfoPage,{'goodId':prdId})
}
//outtime
outrun(){
  this.showmg=false;
}
// 上拉
  doInfinite1(infiniteScroll) {
    this.run=false;
    this.stateCtrl='loading';
    console.log('Begin async operation');
    if(!this.run){
    setTimeout(() => {
      this.run=true;
      this.page++;
      let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype/";
      let data={'clasid':this.classfiyId,'currentPage':this.page}
      this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
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
      this.page--;

      this.hasmore=false;
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);      
      this.moreInfo="没有更多信息了...";

      
      }
      else{   
      this.moreInfo="更多信息...";
       for(let i=0;i<JSON.parse(res).length;i++){
      this.items.push(JSON.parse(res)[i]);
      }
      }
        infiniteScroll.complete();
      })     
    
    }, 3000);
    }
  }
  //服饰
  cloth(str:string){
    this.moreInfo="更多信息...";
    this.hasmore=true;
    this.items=[];
    this.repage=this.page;
  this.page=1;
  switch (str){
  case '1':{
  this.classfiyId=str;
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
      console.log(res);
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);      
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      this.items=[];
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
  if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
  let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsHotBytype";
  let data={'clasid':str,'currentPage':this.page}
  this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      this.moreInfo="未知错误...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      this.moreInfo="没有更多信息了...";
      this.showmg=true;
      setTimeout(then=>this.outrun(),2000);         
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
    this.showCar = !this.showCar;
  }
  showCarFn(prodtId:string){
    this.theOder='请选择款式';
   let url=this.unithttp.getIp().code+"/Api/Goods/selgoodsPro";
    let data={'gid':prodtId}
    this.unithttp.post(url,JSON.stringify(data),(res)=>{ 
   if(res==='PROERROR'){
      console.log(res)
      return;
      }
      else if(res==='EMPTY'){
      console.log(res);
      return;
      }
      else{   
      this.showCar = !this.showCar;
      this.page++;
     this.sxImg=this.Goods.goodstotals[0].imgpath;      
      }return;
      })

  }
  JoinOrder(){
    if(this.GoodsIndex){
      this.showCar = false;
    }
  }
}
