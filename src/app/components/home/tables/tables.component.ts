import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
isTrue:boolean=false;
details(){
  this.isTrue=!this.isTrue;
  console.log(this.isTrue);
}
}
