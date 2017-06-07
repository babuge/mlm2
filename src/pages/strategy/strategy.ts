import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {AnswerOPage} from '../../pages/answer1/answer1';
import {AnswerTWPage} from '../../pages/answer2/answer2';
import {AnswerTHPage} from '../../pages/answer3/answer3';
import {AnswerFOPage} from '../../pages/answer4/answer4';
import {AnswerFFPage} from '../../pages/answer5/answer5';
import {AnswerSPage} from '../../pages/answer6/answer6';


@Component({
  selector: 'strategy-page',
  templateUrl: 'strategy.html'
})
export class StrategyPage {
  public set:any;
    constructor(public navCtr:NavController){

    }
  toBack(){
    this.navCtr.pop();
  }

  runs(i){
    console.log(i+"---"+"123");
    clearTimeout(this.set);
      switch (i){
      case 1:{
        this.navCtr.push(AnswerOPage,{});
        break;
      }
      case 2:{
        this.navCtr.push(AnswerTWPage,{});
        break;
      }
      case 3:{
        this.navCtr.push(AnswerTHPage,{});
        break;
      }
      case 4:{
        this.navCtr.push(AnswerFOPage,{});
        break;
      }
      case 5:{
        this.navCtr.push(AnswerFFPage,{});
        break;
      }
      case 6:{
        this.navCtr.push(AnswerSPage,{});
        break;
      }
    }
  }

  goNext(i:number){
    this.set=setTimeout(then=>this.runs(i),800);
   
  }
    // 销毁组件时 如跑表
 ngOnDestroy() {

 }

}