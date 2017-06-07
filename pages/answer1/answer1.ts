import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HomeModel } from '../../model/Home-model';


@Component({
  selector: 'answer1-page',
  templateUrl: 'answer1.html'
})
export class AnswerOPage {

    constructor(public navCtr:NavController){

    }


     toBack(){
       this.navCtr.pop();
     }





}