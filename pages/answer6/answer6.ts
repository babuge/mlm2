import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HomeModel } from '../../model/Home-model';


@Component({
  selector: 'answer6-page',
  templateUrl: 'answer6.html'
})
export class AnswerSPage {

    constructor(public navCtr:NavController){

    }


     toBack(){
       this.navCtr.pop();
     }





}