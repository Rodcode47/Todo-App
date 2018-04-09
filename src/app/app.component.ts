import { Component } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from './router.animations';

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

