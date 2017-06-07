import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
// import { HomeModel } from '../../model/Home-model';


@Component({
  selector: 'answer3-page',
  templateUrl: 'answer3.html'
})
export class AnswerTHPage {

    constructor(public navCtr:NavController){

    }


     toBack(){
       this.navCtr.pop();
     }





}