import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { unitHttp } from '../model/unitHttp';

import { TabsPage } from '../pages/tabs/tabs';
import { StorageService } from '../providers/storageService';
import {LoginPage} from '../pages/logIn/login';
@Component({
  templateUrl: 'app.html',
    providers: [StorageService]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage:StorageService,private unithttp:unitHttp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.unithttp.setEnvironment("dev");
    console.log(this.unithttp.getIp());
    if(!this.storage.read('UserId')){
	     this.rootPage=LoginPage;
	   }else{
	     this.rootPage=TabsPage;
	}
  
}
}
