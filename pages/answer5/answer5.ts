import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
// import { HomeModel } from '../../model/Home-model';


@Component({
  selector: 'answer5-page',
  templateUrl: 'answer5.html'
})
export class AnswerFFPage {

    constructor(public navCtr:NavController){

    }


     toBack(){
       this.navCtr.pop();
     }





}