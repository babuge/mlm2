import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';




@Component({
  selector: 'rule-page',
  templateUrl: 'rule.html'
})
export class RulePage {
    public showOne:boolean=true;
    public showTwo:boolean=false;
    public showThree:boolean=false;
    constructor(public navCtr:NavController){

    } 
     toBack(){
       this.navCtr.pop();
     }
    showFn(i:number){
      switch (i){
        case 1:{
          this.showOne=!this.showOne;
          break;
        }
        case 2:{
          this.showTwo=!this.showTwo;
          break;
          
        }
        case 3:{
          this.showThree=!this.showThree;
          break;
          
        }
      }

    }






}