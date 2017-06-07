import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HomeModel } from '../../model/Home-model';


@Component({
  selector: 'answer4-page',
  templateUrl: 'answer4.html'
})
export class AnswerFOPage {

    constructor(public navCtr:NavController){

    }


     toBack(){
       this.navCtr.pop();
     }





}