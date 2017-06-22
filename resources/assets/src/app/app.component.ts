import { Component, OnInit } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: viewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
