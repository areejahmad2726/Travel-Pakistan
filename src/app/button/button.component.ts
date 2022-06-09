import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  DataArray:any =[];
  PublicButtonValue:any;
  ShowButton:Boolean = true;
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  GetData (){

  }
  GetButtonData(ButtonValue:any){
    this.PublicButtonValue = ButtonValue.value;
    this.ShowButton = false;
    console.log(this.PublicButtonValue);
  }
}
