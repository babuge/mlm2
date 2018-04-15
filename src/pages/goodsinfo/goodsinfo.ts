import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {unitHttp} from '../../model/unitHttp';
/*
  Generated class for the Goodsinfo page.


  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goodsinfo',
  templateUrl: 'goodsinfo.html'
})
export class GoodsinfoPage {
    public Goods = null;
  public GoodsIndex = null;
  public showCar = false;showPage=false;theOder:string="请选择款式";
  public goodId:string;sxImg:string="";
  items=[];teamTxtew;item=[];
  public runhost:boolean=true;gethost;
  // goall:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public unithttp:unitHttp) {
    for(let ss=0;ss<10;ss++){
      this.item[ss]=ss;
    }
  
  }

  ionViewDidLoad() {
    this.gethost=this.navParams.get("ishostory");
    if(this.gethost!=undefined&&this.gethost!=null){
      this.runhost=false;
    }
    console.log('ionViewDidLoad GoodsinfoPage'); 
    let url=this.unithttp.getIp().code+"/Api/Goods/selGoodsTotal";
    this.goodId=this.navParams.get("goodId");
    console.log(this.navParams.get("goodId"));
    let data={'gid':this.goodId}
    console.log("goodId:"+this.goodId);
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
        this.showPage=true;
      console.log("----0----"+res);
      this.items=JSON.parse(res);
      // this.goall=this.items.info;
      // this.Goods=JSON.parse(res.Goodstotals);
      this.Goods=JSON.parse(res).goodstotals;

      }return;
      })
  
 
  }

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
  showCarFn(Goods){
        this.theOder='请选择款式';
    this.showCar = !this.showCar;
    this.sxImg=this.Goods[0].imgpath;
    this.Goods=Goods;

    // this.sxImg=Goods[0].imgpath;
  }
  JoinOrder(){
    if(this.GoodsIndex){
      this.showCar = false;
    }
  }
}


