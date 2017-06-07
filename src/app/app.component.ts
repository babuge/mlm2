import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { StorageService } from '../providers/storageService';
import {LoginPage} from '../pages/logIn/login';
@Component({
  templateUrl: 'app.html',
    providers: [StorageService]
})
export class MyApp {
  rootPage:any;
  constructor(platform: Platform,public storage:StorageService) {


     
      

    platform.ready().then(() => {
        
      // Okay, so the platform is ready and our plugins are available.
      //对每一个动画转场效果，有三种时间线属性可以调整：持续时间(duration)、延迟(delay)和缓动(easing)函数。它们被合并到了一个单独的转场时间线字符串。
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();//状态栏默认
      // StatusBar.overlaysWebView(true); // let status bar overlay webview---覆盖
      Splashscreen.hide();
      // StatusBar.backgroundColorByHexString('rgba(255,0,54,0.5)'); // set status bar to white--color

  });
  if(!this.storage.read('UserId')){
     this.rootPage=LoginPage;
   }else{
     this.rootPage=TabsPage;
   }

}






}