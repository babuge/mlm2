import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
// import { unitHttp } from '../../model/unitHttp';
// import { StorageService } from '../../providers/storageService';


@Component({
  selector: 'mypartner-page',
  templateUrl: 'mypartner.html'
})
export class MypartnerPage {
    public showOne:boolean=true;
    public showTwo:boolean=false;
    public showThree:boolean=false;
    constructor(public navCtr:NavController){

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
     toBack(){
       this.navCtr.pop();
     }





}