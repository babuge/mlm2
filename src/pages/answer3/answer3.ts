import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';


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