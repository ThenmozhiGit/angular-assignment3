import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  userName = '';

  constructor(){
    this.userName =  '';
  }

  onClickUserName(event: any){
    this.userName = event.target.value;
  }

  onClickButton(){
    this.userName = '';
  }
}
