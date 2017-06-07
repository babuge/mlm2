import {Injectable} from '@angular/core';

// Declare TabsService as a provider in app.module.ts
// Inject TabsService in your class: constructor(public tabs: TabsService){}
// Use the this.tabs.hide() or this.tabs.show() methods wherever you want
@Injectable()
export class TabsService {
  constructor() {}

  public hide() {
    let tabs = document.querySelectorAll('.tabbar');
    let footer = document.querySelectorAll('.footer');
    let scrollContent = document.querySelectorAll('.scroll-content');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });

      // fix for removing the margin if you got scorllable content
      setTimeout(() =>{
        Object.keys(scrollContent).map((key) => {
          scrollContent[key].style.marginBottom = '0';
        });
        Object.keys(footer).map((key) => {
          footer[key].style.bottom = '0px';
        });
      })
    }
  }
  public showTabTwo(){
    let tabBar0=document.querySelectorAll('#tab-t0-0');
    let tabBar1=document.querySelectorAll('#tab-t0-1');
    let tabBar2=document.querySelectorAll('#tab-t0-2');
    let tabBar3=document.querySelectorAll('#tab-t0-3');
    
    if(tabBar1!== null){
      Object.keys(tabBar0).map((key)=>{
        tabBar0[key].style.color='#ff6c6c';
        tabBar0[key].style.background='#ffe7e7';
      })
      Object.keys(tabBar1).map((key)=>{
        tabBar1[key].style.color='#ff6c6c';
        tabBar1[key].style.background='#ffe7e7';
      })
      Object.keys(tabBar2).map((key)=>{
        tabBar2[key].style.color='#ff6c6c';
        tabBar2[key].style.background='#ffe7e7';
      })
      Object.keys(tabBar3).map((key)=>{
        tabBar3[key].style.color='#ff6c6c';
        tabBar3[key].style.background='#ffe7e7';
      })
    }

  }
  public show() {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'flex';
      });
    }
  }
}