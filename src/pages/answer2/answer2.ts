import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';


@Component({
  selector: 'answer2-page',
  templateUrl: 'answer2.html'
})
export class AnswerTWPage {

    constructor(public navCtr:NavController){

    }


     toBack(){
       this.navCtr.pop();
     }





}