import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http} from '@angular/http';
/*
  Generated class for the Goodsinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'addAdress-page',
  templateUrl: 'addAdress.html'
})
export class AdressPage {
  private photoShowT:boolean=false;intName:string;intAdr:string;phoneNum:number;sheng:string;shi:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsinfoPage');



  //    this.http.get("url, options").toPromise()
  //     .then(res => res.json())
  //     .catch(err => {
        
  //     });
  // http.get("json/text.json").success(function(freetrial) { alert(freetrial);$scope.data = freetrial;});
  //   //show 
  //   show(){   
  //     this.photoShow=!this.photoShow;
  //     this.photoShowT=this.photoShow;
  //   }
  // goSumite(){
  //   this.photoShow=!this.photoShow;
  //     this.photoShowT=this.photoShow;
  // }

  //   //json地址
  //   let citydata="",str="";
  //   http("ChineseCities.json",function(data){
  //       citydata=data;
  //       data.forEach(function(data,index){
  //           //index可以作为二级联动的一个编号
  //           str+="<option value="+index+">"+data.name+"</option>";
  //       })
  //       $(".selectOne").append(str);
  //       });
  //   //第二级联动 sheng添加change事件
  //   var cityid="";
  //   var txt1="",txt2="";//为ajax传数据这儿用不着
  //   $(".selectOne").change(function(){
  //       cityid=$(".selectOne").val();//获取select选中的value
  //       $(".selectTwo").empty();//情况该元素的所有子节点，remove清除该元素
  //       var str="<option value='x'>请选择</option>";
  //       citydata[cityid].city.forEach(function(data,index){
  //           str+="<option value="+index+">"+data.name+"</option>";
  //       })
  //       $(".selectTwo").append(str);
  //   });
  //   //联动end=====
  }
 



}
