import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';

  constructor(){

  }

  ngOnInit(){}

    onAddServer() {
      // this.serverElements.push({
      //   type: 'server',
      //   name: this.newServerName,
      //   content: this.newServerContent
      // });
    }
  
    onAddBlueprint() {
      // this.serverElements.push({
      //   type: 'blueprint',
      //   name: this.newServerName,
      //   content: this.newServerContent
      // });
    }
  

}
