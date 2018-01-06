import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
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
