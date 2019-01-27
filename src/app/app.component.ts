import { Component } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from './router.animations';

var http = require("http");
setInterval(function() {
    http.get("https://ngrax5-todo-app.herokuapp.com");
}, 300000); // every 5 minutes (300000)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class AppComponent {
  title = 'app';
  name: any;
  state = '';
  
}

