import { Component, OnInit } from '@angular/core';
import { FizzBuzzParam } from '../fizz-buzz-param';
import { FizzBuzzService } from '../fizz-buzz.service';

@Component({
  selector: 'app-fizz-buzz-param',
  templateUrl: './fizz-buzz-param.component.html',
  styleUrls: ['./fizz-buzz-param.component.scss']
})
export class FizzBuzzParamComponent implements OnInit {
  fizzBuzzParam: FizzBuzzParam;

  constructor(private  fizzBuzzService: FizzBuzzService) {
    this.fizzBuzzParam = new FizzBuzzParam(100, 3, 5);
    this.fizzBuzzService.fizzBuzzParam = this.fizzBuzzParam;
  }

  ngOnInit() {
  
  }

}
