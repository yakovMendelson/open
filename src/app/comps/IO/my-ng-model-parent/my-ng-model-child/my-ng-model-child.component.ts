import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-ng-model-child',
  templateUrl: './my-ng-model-child.component.html',
  styleUrls: ['./my-ng-model-child.component.css']
})
export class MyNgModelChildComponent implements OnInit {

  constructor() { }

  @Input() value:string;
  @Output()valueChange:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
