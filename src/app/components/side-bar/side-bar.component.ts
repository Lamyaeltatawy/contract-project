import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isVisable:boolean=false;
  toggleSidebar() {
    this.isVisable= !this.isVisable;
    console.log(this.isVisable);
  }
}
