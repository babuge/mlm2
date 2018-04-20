 mlm
======
购物app
------
环境： node version：8.9.3 ionic version:3.20.0 cordova version：8.0.0
### download:

  git clone https://github.com/babuge/mlm2.git <br>
  npm install
### add plugin：
  npm install --save add @ionic-native/camera <br>
  npm install --save @ionic-native/file  <br>
  npm install --save @ionic-native/file-transfer  <br>
  npm install --save @ionic-native/splash-screen  @ionic-native/status-bar  <br>
  [极光推送](https://github.com/jpush/jpush-phonegap-plugin)
  cordova plugin add https://github.com/jpush/jpush-phonegap-plugin.git --variable APP_KEY=your_jpush_appkey  <br>
  npm install --save @jiguang-ionic/jpush  <br>
  

### run:
  ionic serve  <br>

### tip：
  updating。。。，learning and Solve practical problems.  <br>
### build：
    \(为了获取到极光推送消息，打包android平台版本7.0.0 jpush@3.4.1，如果cordova@version\<7.0.0,则打包平台@5.1.0 jpush@3.0.3\) <br>
   ionic cordova platform add android@7.0.0  <br>
   ionic cordova platform build android



