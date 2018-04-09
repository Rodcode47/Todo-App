import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class DashboardComponent implements OnInit {
  name: any;
  state = '';

  constructor() { }

  ngOnInit() {
  }

}
