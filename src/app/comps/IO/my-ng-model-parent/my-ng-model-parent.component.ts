import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ng-model-parent',
  templateUrl: './my-ng-model-parent.component.html',
  styleUrls: ['./my-ng-model-parent.component.css']
})
export class MyNgModelParentComponent implements OnInit {

  constructor() { }

  ngm:string='';
  ngOnInit(): void {
  }

}
