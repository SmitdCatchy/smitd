import { Component, HostListener } from '@angular/core';
import { About } from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{

  abouts = [
    new About(
      "catchy",
      "vezető fejlesztő",
      "../../../../media/heads/catchy_pas.png",
      "../../../../media/heads/catchy_act.png",
      "/contacts",
      true
    ),
    new About(
      "szofia",
      "Frontend fejlesztő",
      "../../../../media/heads/szofia_pas.png",
      "../../../../media/heads/szofia_act.png",
      "/contacts",
      true
    ),
    new About(
      "zahovay",
      "backend fejlesztő",
      "../../../../media/heads/zahovay_pas.png",
      "../../../../media/heads/zahovay_act.png",
      "/contacts",
      true
    ),
    new About(
      "apostate",
      "író",
      "../../../../media/heads/apostate_pas.png",
      "../../../../media/heads/apostate_act.png",
      "/contacts",
      true
    ),
    new About(
      "niac",
      "grafikus",
      "../../../../media/heads/niac_pas.png",
      "../../../../media/heads/niac_act.png",
      "/contacts",
      true
    ),
    new About(
      "dudu",
      "webfejlesztő",
      "../../../../media/heads/dudu_pas.png",
      "../../../../media/heads/dudu_act.png",
      "/contacts",
      true
    )
  ]

  collabs = [
    new About(
      "Tuan",
      "kiadó",
      "../../../../media/heads/tuan.png",
      "../../../../media/heads/tuan.png",
      "https://tuan.hu",
      false
    )
  ]



  document_width = document.documentElement.clientWidth;
  document_height = document.documentElement.clientHeight;
  container_width = 1140;
  container_min_height = 0;
  resize(){
    this.document_width = document.documentElement.clientWidth;
    this.document_height = document.documentElement.clientHeight;
    if(this.document_width >= 1200){
      this.container_width = 1140;
    }
    else if(this.document_width >= 1000){
      this.container_width = 920;
    }
    else if(this.document_width >= 720){
      this.container_width = 640;
    }
    else{
      this.container_width = this.document_width;
    }
      this.container_min_height = this.document_height - 120;
  }
  constructor() {
    this.resize();
  }
  @HostListener('window:resize', ['$event'])onResize(event){
    this.resize();
  }
}
