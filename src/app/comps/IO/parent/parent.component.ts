import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  num:number
  inpVal:string;
  names:{}=[
    {name:'avi',age:50},
    {name:'yakov',age:29},
    {name:'ariel',age:35},
    {name:'shlomo',age:43},
    {name:'beni',age:78},
    {name:'yoni',age:30},
    {name:'gadi',age:20},
  ]

  getName():void{
    return this.names[parseInt(this.inpVal)]
  }

  ngOnInit(): void {
  }

}
