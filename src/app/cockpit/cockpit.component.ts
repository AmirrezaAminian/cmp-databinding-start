import { Component, EventEmitter, OnInit, Output , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef ; 



  constructor() {

  }

  ngOnInit() { }

  onAddServer( serverInput) {

     

    var obj={
      serverName: serverInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
   }
    this.serverCreated.emit(obj)
  }

  onAddBlueprint(serverInput) {
    // this.blueprintCreated.emit({
    //   // serverName: this.newServerName,
    //   // serverContent: this.newServerContent
    // });
  }
}
