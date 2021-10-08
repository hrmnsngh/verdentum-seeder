import { Component, OnInit } from '@angular/core';
import { NAVLIST } from './feed/main.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navList = NAVLIST;

  constructor() {

   }

  ngOnInit(): void {
  }

  search(){

  }
}
