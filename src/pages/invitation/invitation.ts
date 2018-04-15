import { Component} from '@angular/core';
import { NavController,NavParams,AlertController} from 'ionic-angular';
import { unitHttp } from '../../model/unitHttp';
// import { ShowmePage} from '../../pages/showme/showme';
import { StorageService } from '../../providers/storageService';
import {SharePage} from '../../pages/invitate_share/invitate_share';
import {TabsService} from '../../providers/tabs-server';
@Component({
  selector: 'invite-page',
  templateUrl: 'invitation.html',
  providers:[StorageService]
})

export class InvitPage{
  private iconName1:string='md-remove';
  private iconName2:string='md-add';
  private fristVal1:Boolean=true;fristVal2:Boolean=false;fristVal3:Boolean=false;fristVal4:Boolean=false;fristVal5:Boolean=false;fristVal6:Boolean=false;fristVal7:Boolean=false;
  private iconName3:string='ios-arrow-down-outline';iconName4:string='ios-arrow-down-outline';iconName5:string='ios-arrow-down-outline';iconName6:string='ios-arrow-down-outline';iconName7:string='ios-arrow-down-outline';
  private qustShow1:Boolean=false;qustShow2:Boolean=false;qustShow3:Boolean=false;qustShow4:Boolean=false;qustShow5:Boolean=false;  
  private anserRead1:string='readonly';anserRead2:string='readonly';anserRead3:string='readonly';anserRead4:string='readonly'; anserRead5:string='readonly';   
  private arrOne:Array<{}>;showEmg:boolean=false;emassege:string="";
  private qustVal:string;qustVal2:string;qustVal3:string;qustVal4:string;qustVal5:string;
  private anone:string;anone2:string;anone3:string;anone4:string;anone5:string;chec1:Boolean=true;chec2:boolean=true;chec3:boolean=true;
  private antwo:string;antwo2:string;antwo3:string;antwo4:string;antwo5:string;rdoTwo:Boolean=false;chec4:boolean=true;chec5:boolean=true;
  private answerArr=[];
    constructor(public params:NavParams,public navCtr:NavController,public tabCtrl:TabsService,
    public unithttp:unitHttp,private alertCtrl: AlertController,public storage:StorageService){}
     toBack(){
       this.navCtr.pop();
     }
  ngAfterViewInit(){//页面初始后


  }
  ionViewDidLoad(){//页面加载完  
        // this.qustVal='问题1';
    this.unithttp.get(this.unithttp.getIp().code+"/Api/Question/quest","",(res)=>{    
    if(res.length==20){
    this.arrOne=res;
    }

    })
    this.tabCtrl.hide();
    }
 ngOnInit() {  

  }  
 onfrist(){
        if(this.fristVal1){
            this.fristVal1=false;
            this.iconName1='md-add';
            this.fristVal3=false;
            this.iconName3='ios-arrow-down-outline';
        }
        else{
            this.fristVal1=true;
            this.iconName1='md-remove';

        }
    }
onSecond(){
        if(this.fristVal2){
            this.fristVal2=false;
            this.iconName2='md-add';}
        else{
            this.fristVal2=true;
            this.iconName2='md-remove';

        }
    }
    //问题展开1
 onThrid(nums:number){
     
     switch(nums){
         case 0:{
                this.fristVal4=false;this.fristVal5=false;this.fristVal6=false;this.fristVal7=false;
                this.iconName4='ios-arrow-down-outline';this.iconName5='ios-arrow-down-outline';
                this.iconName6='ios-arrow-down-outline';this.iconName7='ios-arrow-down-outline';
                if(this.fristVal3){
                this.fristVal3=false;
                this.iconName3='ios-arrow-down-outline';}
                else{
                this.fristVal3=true;
                this.iconName3='ios-arrow-up-outline'; }
                break;
        }
         case 1:{
                this.fristVal3=false;this.fristVal5=false;this.fristVal6=false;this.fristVal7=false;
                this.iconName3='ios-arrow-down-outline';this.iconName5='ios-arrow-down-outline';
                this.iconName6='ios-arrow-down-outline';this.iconName7='ios-arrow-down-outline';
                if(this.fristVal4){
                this.fristVal4=false;
                this.iconName4='ios-arrow-down-outline';}
                else{
                this.fristVal4=true;
                this.iconName4='ios-arrow-up-outline';
         }break;}
         case 2:{
                this.fristVal3=false;this.fristVal4=false;this.fristVal6=false;this.fristVal7=false;
                this.iconName3='ios-arrow-down-outline';this.iconName4='ios-arrow-down-outline';
                this.iconName6='ios-arrow-down-outline';this.iconName7='ios-arrow-down-outline';
                if(this.fristVal5){
                this.fristVal5=false;
                this.iconName5='ios-arrow-down-outline';}
                else{
                this.fristVal5=true;
                this.iconName5='ios-arrow-up-outline';
         }break;}  
          case 3:{
                this.fristVal3=false;this.fristVal4=false;this.fristVal5=false;this.fristVal7=false;
                this.iconName3='ios-arrow-down-outline';this.iconName4='ios-arrow-down-outline';this.iconName5='ios-arrow-down-outline';
                this.iconName7='ios-arrow-down-outline';
                if(this.fristVal6){
                this.fristVal6=false;
                this.iconName6='ios-arrow-down-outline';}
                else{
                this.fristVal6=true;
                this.iconName6='ios-arrow-up-outline';
                }break;} 
          case 4:{
                this.fristVal3=false;this.fristVal4=false;this.fristVal5=false;this.fristVal6=false;
                this.iconName3='ios-arrow-down-outline';this.iconName4='ios-arrow-down-outline';this.iconName5='ios-arrow-down-outline';
                this.iconName6='ios-arrow-down-outline';
                if(this.fristVal7){
                this.fristVal7=false;
                this.iconName7='ios-arrow-down-outline';}
                else{
                this.fristVal7=true;
                this.iconName7='ios-arrow-up-outline';
                }break;}                  
                      
       }
      
}
//问题选择l
    qustClk(ques:string,anwOne:string,anwTwo:string,i:number,id:string,numb:number){
        console.log("生效")
        switch (numb){
            case 0:{
                    this.anserRead1="readonly";
                    this.qustVal=ques;//===111
                    this.anone=anwOne;
                    this.antwo=anwTwo;
                    if(this.fristVal3){
                    this.fristVal3=false;
                    this.iconName3='ios-arrow-down-outline';
                    // this.qustShow1=false;
                    this.qustShow1=true;}
                    else{
                    this.fristVal3=true;
                    this.iconName3='ios-arrow-up-outline';
                    // this.qustShow1=true;
                    this.qustShow1=false;}
                    break;
            }
            case 1:{
                    this.anserRead2="readonly";
                    this.qustVal2=ques;//===111
                    this.anone2=anwOne;
                    this.antwo2=anwTwo;
                    if(this.fristVal4){
                    this.fristVal4=false;
                    this.iconName4='ios-arrow-down-outline';
                    this.qustShow2=true;}
                    else{
                    this.fristVal4=true;
                    this.iconName4='ios-arrow-up-outline';
                    this.qustShow2=false;}
                    break;
            }
            case 2:{
                    this.anserRead3="readonly";
                    this.qustVal3=ques;//===111
                    this.anone3=anwOne;
                    this.antwo3=anwTwo;
                    if(this.fristVal5){
                    this.fristVal5=false;
                    this.iconName5='ios-arrow-down-outline';
                    // this.qustShow1=false;
                    this.qustShow3=true;}
                    else{
                    this.fristVal5=true;
                    this.iconName5='ios-arrow-up-outline';
                    // this.qustShow1=true;
                    this.qustShow3=false;}
                    break;
            }
            case 3:{
                    this.anserRead4="readonly";
                    this.qustVal4=ques;//===111
                    this.anone4=anwOne;
                    this.antwo4=anwTwo;
                    if(this.fristVal6){
                    this.fristVal6=false;
                    this.iconName6='ios-arrow-down-outline';
                    // this.qustShow1=false;
                    this.qustShow4=true;}
                    else{
                    this.fristVal6=true;
                    this.iconName6='ios-arrow-up-outline';
                    // this.qustShow1=true;
                    this.qustShow4=false;}
                    break;
            }
            case 4:{
                    this.anserRead5="readonly";
                    this.qustVal5=ques;//===111
                    this.anone5=anwOne;
                    this.antwo5=anwTwo;
                    if(this.fristVal7){
                    this.fristVal7=false;
                    this.iconName7='ios-arrow-down-outline';
                    // this.qustShow1=false;
                    this.qustShow5=true;}
                    else{
                    this.fristVal7=true;
                    this.iconName7='ios-arrow-up-outline';
                    // this.qustShow1=true;
                    this.qustShow5=false;}
                    break;
            }


        }
  
    }


    //自定义1
clickSet(num:number){
   switch (num){
    case 0:{
        this.anserRead1=null;
        this.qustVal='';
        if(this.fristVal3){
        this.fristVal3=false;
        this.iconName3='ios-arrow-down-outline';
        this.qustShow1=true;
        }
        else{
        this.fristVal3=true;
        this.iconName3='ios-arrow-up-outline';
        this.qustShow1=false;
        }
        break;
    }
    case 1:{
        this.anserRead2=null;
        this.qustVal2="";
        if(this.fristVal4){
        this.fristVal4=false;
        this.iconName4='ios-arrow-down-outline';
        this.qustShow2=true;
        }
        else{
        this.fristVal4=true;
        this.iconName4='ios-arrow-up-outline';
        this.qustShow2=false;
        }
        break;
    }
    case 2:{
        this.anserRead3=null;
        this.qustVal3="";
        if(this.fristVal5){
        this.fristVal5=false;
        this.iconName5='ios-arrow-down-outline';
        this.qustShow3=true;
        }
        else{
        this.fristVal5=true;
        this.iconName5='ios-arrow-up-outline';
        this.qustShow3=false;
        }
        break;
    }
    case 3:{
        this.anserRead4=null;
        this.qustVal4="";        
        if(this.fristVal6){
        this.fristVal6=false;
        this.iconName6='ios-arrow-down-outline';
        this.qustShow4=true;
        }
        else{
        this.fristVal6=true;
        this.iconName6='ios-arrow-up-outline';
        this.qustShow4=false;
        }
        break;
    }
    case 4:{
        this.anserRead5=null;
        this.qustVal5="";        
        if(this.fristVal7){
        this.fristVal7=false;
        this.iconName7='ios-arrow-down-outline';
        this.qustShow5=true;
        }
        else{
        this.fristVal7=true;
        this.iconName7='ios-arrow-up-outline';
        this.qustShow5=false;
        }
        break;
    }
   }

}
// checked radio
radioCkFn(num:string){
    switch (num){
        case '0':{
            this.chec1=!this.chec1;
            break;
        }
        case '1':{
            this.chec2=!this.chec2;
            break;
        }
        case '2':{
            this.chec3=!this.chec3;
            break;
        }
        case '3':{
            this.chec4=!this.chec4;
            break;
        }
        case '4':{
            this.chec5=!this.chec5;
            break;
        }
    }
}
errShowFn(){
    this.showEmg=false;
  }  
//提交
queding(){  
    if(this.qustVal==null||this.qustVal2==null||this.qustVal3==null||this.qustVal4==null||this.qustVal5==null){
        this.showEmg=true;
        this.emassege="问题不能为空！";
        setTimeout(then=>this.errShowFn(),2000);
        return;
    }
    // radio
    if(this.chec1==true){ this.answerArr[0]=this.anone; }else{ this.answerArr[0]=this.antwo; }
    if(this.chec2==true){ this.answerArr[1]=this.anone2; }else{ this.answerArr[1]=this.antwo2; }
    if(this.chec3==true){ this.answerArr[2]=this.anone3; }else{ this.answerArr[2]=this.antwo3; }
    if(this.chec4==true){ this.answerArr[3]=this.anone4; }else{ this.answerArr[3]=this.antwo4; }
    if(this.chec5==true){ this.answerArr[4]=this.anone5; }else{ this.answerArr[4]=this.antwo5; }

    // datas
    let data=[{
        uid:""+this.storage.read('UserId'),
        questions:this.qustVal,
        oneanswers:this.anone,
        twoanswers:this.antwo,
        trueanswers:this.answerArr[0]
    },{
        uid:""+this.storage.read('UserId'),
        questions:this.qustVal2,
        oneanswers:this.anone2,
        twoanswers:this.antwo2,
        trueanswers:this.answerArr[1]
    },{
        uid:""+this.storage.read('UserId'),
        questions:this.qustVal3,
        oneanswers:this.anone3,
        twoanswers:this.antwo3,
        trueanswers:this.answerArr[2]
    },{
        uid:""+this.storage.read('UserId'),
        questions:this.qustVal4,
        oneanswers:this.anone4,
        twoanswers:this.antwo4,
        trueanswers:this.answerArr[3]
    },{
        uid:""+this.storage.read('UserId'),
        questions:this.qustVal5,
        oneanswers:this.anone5,
        twoanswers:this.antwo5,
        trueanswers:this.answerArr[4]
    }]

    // this.qustVal='问题1'; 
    this.unithttp.post(this.unithttp.getIp().code+"/Api/Question/setQuest",JSON.stringify(data),(res)=>{    
       if(res.trim()=="ISSAME"){
        this.showEmg=true;
        this.emassege="问题选重了!";
        setTimeout(then=>this.errShowFn(),2000);
        return;
       }
       if(res.trim()=="ERROR"){
            this.showEmg=true;
            this.emassege="出错了!";
            setTimeout(then=>this.errShowFn(),2000);
            return;  
       }
       if(res.trim()=="PROERROR"){
            this.showEmg=true;
            this.emassege="未知错误！";
            setTimeout(then=>this.errShowFn(),2000);
            return; 
       }
       this.navCtr.push(SharePage);
    });

    }
        
      // 销毁组件时 如跑表
 ngOnDestroy() {
    this.tabCtrl.show();
 }




}









