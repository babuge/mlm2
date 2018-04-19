import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NavController, Refresher, App, ViewController, Content } from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
import { StorageService } from '../../providers/storageService';
import { SharePage } from '../../pages/invitate_share/invitate_share';
import { ShowmePage } from '../../pages/showme/showme';
import { WholookmePage } from '../../pages/wholookme/wholookme';
import { RulePage } from '../../pages/rule/rule';
import { ContactPage } from '../../pages/contact/contact';
import { StrategyPage } from '../../pages/strategy/strategy';
import { MyDataPage } from '../../pages/myData/myData';
import { MoneyPage } from '../../pages/getMoney/getMoney';
import { GoodsinfoPage } from '../../pages/goodsinfo/goodsinfo';
import { TabsService } from '../../providers/tabs-server';
import {JpushPage} from '../../pages/jpush/jpush';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StorageService]
})
export class HomePage {
  @ViewChild(Content) content: Content;
  @Input("slides") slides: Array<{ adimg: any }>;
  @ViewChild('progress') progress: ElementRef;
  public User: any; uid; showUser: boolean = false; showslide: boolean = false;
  public Pting: Array<Object>;
  public imga: string = 'assets/images/banner1.png'; imgb: string = 'assets/images/banner1.png'; imgc: string = 'assets/images/banner1.png';
  public haveUser: string = "assets/images/logo.png"; urlHot: string;
  public refreshTxt: string = '更新中...'; moreInfo = "更多信息...";
  public loading: any; showPting: boolean = false; myTopSlideOptions: any; setTime: any;
  public hotTeam: boolean = false; showPage: boolean = false; showmg = false; hasmore = true; run = false; showTuiJian = false;
  public page: number = 1;//模拟用户信息
  public urls: string;
  public urlpting: string;
  items = []; itemsa = []; Hot = []; imgArr: Array<{ "adimg": any }>; mySlideOptions;
  constructor(public navCtrl: NavController, public unithttp: unitHttp,
    public storage: StorageService, public appCtr: App, public viewCtrl: ViewController, public tabCtrl: TabsService) {
    this.User = [];
  }
  ngOnInit() {//页面加载完成后自己调用==>页面初始化时
  }
  outrun() {
    this.showmg = false;
  }
  showBanner(mm: any) {
    this.showslide = true;
    this.slides = mm;

  }
  ionViewDidLoad() {//页面加载完  
    //轮播图
    this.unithttp.post(this.unithttp.getIp().code + "/api/advert", JSON.stringify({}), (res) => {
      if (res === 'EMPTY') { return; }
      // this.showBanner(JSON.parse(res));
    });
    this.urls = this.unithttp.getIp().code + '/Api/User/userPorfit/uid/' + this.storage.read("UserId");
    this.urlHot = this.unithttp.getIp().code + '/Api/SpellTeam/teamhoting/uid/';
    //get请求
    this.unithttp.get(this.urls, "", (a) => {
      this.showUser = true;
      let res = {
        id: 20,
        porfile: "assets/images/logo.png",
        username: "胡栋",
        phone: 13088015561,
        porfit: 100
      };
      this.User = res;
      this.storage.write('UserId', res.id);
      this.storage.write('UserImg', res.porfile);
      this.storage.write("UserName", res.username);
      this.storage.write('UserPhone', res.phone);
      this.haveUser = this.storage.read("UserImg");


    });
    //Pting拼团ing
    this.urlpting = this.unithttp.getIp().code + '/Api/SpellTeam/selteaming';
    let dataPting = { 'uid': this.storage.read("UserId") }
    this.unithttp.post(this.urlpting, JSON.stringify(dataPting), (res) => {
      if (res === 'PROERROR') {
        this.hotTeam = false;
        console.log(res)
        return;
      }
      if (res === 'EMPTY') {
        this.hotTeam = false;
        console.log(res);
        return;
      }
      this.showPting = true;
      let data:Array<Object>=[];
      data= [{id: 1,
        imgpath:"assets/images/product_short.jpg",
        start_time:11,
        attname:'鞋',
        supportTotal:12,
        goods:{id:1,xgdays:7,name:"运动鞋",price:110,supportnum:18}},
        {
          id: 2,
          imgpath:"assets/images/product_short.jpg",
          start_time:11,
          attname:'鞋',
          supportTotal:12,
          goods:{id:2,xgdays:7,name:"运动鞋",price:110,supportnum:18}}];
      this.Pting =data;
    });
    //预热    
    let data = { 'uid': this.storage.read("UserId") }
    this.unithttp.post(this.urlHot, JSON.stringify(data), (res) => {
      if (res === 'PROERROR') {
        this.hotTeam = false;
        console.log(res)
        return;
      }
      if (res === 'EMPTY') {
        this.hotTeam = false;
        console.log(res);
        return;
      }
      this.hotTeam = true;
      this.Hot = [{id: 1,
        imgpath:"assets/images/product_short.jpg",
        start_time:11,
        attname:'鞋',
        supportTotal:12,
        goods:{id:1,xgdays:7,name:"运动鞋",price:110,supportnum:18}},
        {
          id: 2,
          imgpath:"assets/images/product_short.jpg",
          start_time:11,
          attname:'鞋',
          supportTotal:12,
          goods:{id:2,xgdays:7,name:"运动鞋",price:110,supportnum:18}}];;
    })

    //推荐
    let url1 = this.unithttp.getIp().code + "/Api/Goods/istjteam";
    let datas1 = { 'currentPage': this.page }
    this.unithttp.post(url1, JSON.stringify(datas1), (res) => {
      if (res === 'PROERROR') {
        console.log(res)
        this.moreInfo = "未知错误...";
        this.showmg = true;
        setTimeout(then => this.outrun(), 2000);
        this.hasmore = false;
        this.page--;
      }
      else if (res === 'EMPTY') {
        console.log(res);
        this.moreInfo = "没有更多信息了...";
        this.showmg = true;
        setTimeout(then => this.outrun(), 2000);
        this.hasmore = false;
        this.page--;

      }
      else {
        this.moreInfo = "查看更多...";
        this.showTuiJian = true;
        if (!res) {
          res = [];
        }
        res = this.getData(this.page, res);
        this.page++;
        this.items = res;
      }
    })
  }



  public getData = (num: Number, res) => {
    for (let index = (this.page - 1) * 3; index < this.page * 3; index++) {
      res.push({
        id: index,
        name: "商品展示" + index,
        goodsimg: "assets/images/product_short.jpg",
        attname: "鞋",
        price: Math.floor((Math.random() + 1) * 120),
        supportnum: Math.floor((Math.random() + 1) * 12)
      });
      return res;
    };
  }
  // 销毁组件时 如跑表
  ngOnDestroy() { }

  //上拉添加    
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.run = false;
    this.hasmore = true;
    if (!this.run) {
      setTimeout(then => {
        this.run = true;
        this.page++;
        let url = this.unithttp.getIp().code + "/Api/Goods/istjteam";
        let datas = { 'currentPage': this.page }
        this.unithttp.post(url, JSON.stringify(datas), (res) => {

          if (res === 'PROERROR') {
            console.log(res)
            this.moreInfo = "未知错误...";
            this.showmg = true;
            setTimeout(then => this.outrun(), 2000);
            this.hasmore = false;
            this.page--;
          }
          else if (res === 'EMPTY') {
            console.log(res);
            this.moreInfo = "没有更多信息了...";
            this.showmg = true;
            setTimeout(then => this.outrun(), 2000);
            this.hasmore = false;
            this.page--;
          }
          else {
            if(!res){
              res=[];
            }
            res =this.getData(this.page,res); 
            this.moreInfo = "查看更多...";
            for (let i = 0; i < res.length; i++) {
              this.items.push(res[i]);
            }
          }
          infiniteScroll.complete();
        })
      }, 3000);
    }
  }
  //下拉更新
  doRefresh(refresher: Refresher) {
    this.refreshTxt = '正在刷新...';
    setTimeout(() => {
      console.log('Async operation has ended');
      this.refreshTxt = '网络不给力啊~~';
      setTimeout(() => {
        refresher.complete();
      }, 3000)
    }, 17000);
    this.unithttp.get(this.urls, "", (a) => {
      let res = {
        id: 0,
        porfile: "assets/images/logo.png",
        username: "胡栋",
        phone: 13088015561,
        porfit: 100
      };
      this.User = [];
      this.User = res;
      this.storage.write('UserImg', res.porfile);
      this.haveUser = this.unithttp.getIp().code + this.storage.read("UserImg");
      refresher.complete();
    })
    console.log('Begin async operation', refresher);
  }

  //click....
  public showa: boolean = true;
  //to somePage
  goToPage(page: string, goodsId: string, ptid: string) {
    switch (page) {
      case 'showme': {
        this.navCtrl.push(ShowmePage, { id: goodsId, ptId: ptid });
        break;
      }
      case 'wholookme': {
        this.navCtrl.push(WholookmePage, { id: goodsId, ptId: ptid });
        break;
      }
      case 'invitation': {
        this.navCtrl.push(SharePage, { id: goodsId, ptId: ptid });
        break;
      }
      case 'contact': {
        this.appCtr.getRootNav().push(ContactPage);
        break;
      }
    }

  }
  //hotTeam
  callFrinds(str: string) {
    this.navCtrl.push(SharePage, { ptid: str });
  }
  //to rulePage
  ptRule() {
    this.navCtrl.push(RulePage, {});
  }
  //to StrategyPage
  toStrategy() {
    this.navCtrl.push(StrategyPage, {});
  }
  //to mydata
  lookMyself() {
    this.appCtr.getRootNav().push(MyDataPage, { User: this.User, UserImg: this.haveUser });
  }
  //to myMoney
  toMyMoney() {
    this.appCtr.getRootNav().push(MoneyPage);
  }
  //to goodsInfo
  toGoodsInfo(prodId: string) {
    this.navCtrl.push(GoodsinfoPage, { 'goodId': prodId })
  }
  //to jpush
  toJpushPage(){
    this.navCtrl.push(JpushPage,{});
  }




}
