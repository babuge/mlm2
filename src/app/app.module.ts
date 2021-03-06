import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { JPush } from '@jiguang-ionic/jpush';
import { Device } from '@ionic-native/device';

import { HttpServer } from '../providers/http-server';
import { TabsService } from '../providers/tabs-server';
import { StorageService } from '../providers/storageService';
import { unitHttp } from '../model/unitHttp';

import { AboutPage } from '../pages/about/about';
import { InvitPage } from '../pages/invitation/invitation';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ShowmePage } from '../pages/showme/showme';
import { MyHomePage } from '../pages/my-home/my-home';
import { WholookmePage } from '../pages/wholookme/wholookme';
import { RulePage } from '../pages/rule/rule';
import { SharePage } from '../pages/invitate_share/invitate_share';
import { MyDataPage } from '../pages/myData/myData';
import { MoneyPage } from '../pages/getMoney/getMoney';
import { MypartnerPage } from '../pages/mypartner/mypartner';
import { StrategyPage } from '../pages/strategy/strategy';
import { AnswerOPage } from '../pages/answer1/answer1';
import { AnswerTWPage } from '../pages/answer2/answer2';
import { AnswerTHPage } from '../pages/answer3/answer3';
import { AnswerFOPage } from '../pages/answer4/answer4';
import { AnswerFFPage } from '../pages/answer5/answer5';
import { AnswerSPage } from '../pages/answer6/answer6';
import { GoodsinfoPage } from '../pages/goodsinfo/goodsinfo';
import { AdressPage } from '../pages/addAdress/addAdress';
import { BandCardPage } from '../pages/bandCard/bandCard';
import { CardChangePage } from '../pages/bankCardChg/bankCardChg';
import { MoneyToBankPage } from '../pages/MoneyToBank/MoneyToBank';
import { MtoBankHPage } from '../pages/MtoBankH/MtoBankH';
import { MessegePage } from '../pages/Messege/Messege';
import { MessegeSubPage } from '../pages/MessegeSub/MessegeSub';
import { OpinionPage } from '../pages/opinion/opinion';
import { LoginPage } from '../pages/logIn/login';
import { RegPage } from '../pages/register/register';
import {JpushPage} from '../pages/jpush/jpush';

@NgModule({
  declarations: [
    MyApp,
    InvitPage,
    AboutPage,
    ContactPage,
    HomePage,
    WholookmePage,
    TabsPage,
    MyHomePage,
    ShowmePage,
    RulePage,
    SharePage,
    MyDataPage,
    MoneyPage,
    MypartnerPage,
    StrategyPage,
    AnswerOPage,
    AnswerTWPage,
    AnswerTHPage,
    AnswerFOPage,
    AnswerFFPage,
    AnswerSPage,
    GoodsinfoPage,
    AdressPage,
    BandCardPage,
    CardChangePage,
    MoneyToBankPage,
    MtoBankHPage,
    MessegePage,
    MessegeSubPage,
    OpinionPage,
    LoginPage,
    RegPage,
    JpushPage
  ],
  imports: [
    // IonicModule.forRoot(MyApp)
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '·µ»Ø',
      iconMode: 'ios',
      popEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios',
      tabsHideOnSubPages: 'true'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InvitPage,
    AboutPage,
    ContactPage,
    HomePage,
    WholookmePage,
    TabsPage,
    MyHomePage,
    ShowmePage,
    RulePage,
    SharePage,
    MyDataPage,
    MoneyPage,
    MypartnerPage,
    StrategyPage,
    AnswerOPage,
    AnswerTWPage,
    AnswerTHPage,
    AnswerFOPage,
    AnswerFFPage,
    AnswerSPage,
    GoodsinfoPage,
    AdressPage,
    BandCardPage,
    CardChangePage,
    MoneyToBankPage,
    MtoBankHPage,
    MessegePage,
    MessegeSubPage,
    OpinionPage,
    LoginPage,
    RegPage,
    JpushPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    HttpServer,
    unitHttp,
    StorageService,
    TabsService,
    JPush,
    Device,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }