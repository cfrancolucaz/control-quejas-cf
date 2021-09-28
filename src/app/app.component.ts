import { Component } from '@angular/core';
import { WebServices } from './service/web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'control-quejas-cf';

  constructor(public service:WebServices){}
}
