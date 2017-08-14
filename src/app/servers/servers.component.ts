import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template OR template URL has to exist (one or the other)
  templateUrl: './servers.component.html',
  // can write template code here:
  // template: '<app-server></app-server>',
  // use " ` " to be able to wrap inline templates
  // template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
