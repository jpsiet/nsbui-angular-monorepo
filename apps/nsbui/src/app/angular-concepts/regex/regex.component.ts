import { Component, OnInit } from '@angular/core';
import { StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.scss']
})
export class RegexComponent implements OnInit {

  constructor() { }
  currentAmout!: string;

  formattedValue!: number;

  ngOnInit(): void {
  }

  handleInput(event:any){

     this.currentAmout = event?.target.value;
 }
  formateString(value:string):string{
    let regex = /[$,]/g;
    return value.replace(regex,'');
  }
  handleOnClik(){
    // replace $dollar sign , comma and other value
    this.formattedValue = parseInt(this.formateString(this.currentAmout));
  }
}
