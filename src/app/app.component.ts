import { Component   } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type : 'server' , name : 'Testserver' , content: 'Just a test!'}];


  recieveServer(x){

    this.serverElements.push(
    {type : 'server', name : x.serverName, content: x.serverContent}
    )

  }
  recieveBlueprint(x){
    this.serverElements.push(
      {type : 'blueprint', name : x.serverName, content: x.serverContent}
      )
  }

 
}
