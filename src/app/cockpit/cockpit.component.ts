import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName : string , serverContent : string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName : string , serverContent : string}>();

   serverName = '';
   serverContent=  '';
 

   AddServerName(){
    console.log(this.serverName);

    const obj ={
      serverName : this.serverName,
      serverContent : this.serverContent
    }
    

    this.serverCreated.emit(obj);
   }
   AddContentName(){
      const obj = {
        serverName : this.serverName,
        serverContent : this.serverContent
      }    
      this.blueprintCreated.emit(obj);
   }

}
