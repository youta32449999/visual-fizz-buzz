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
    this.fizzBuzzParam = this.fizzBuzzService.getInitValue();
  }

  ngOnInit() {
    /** 初期値を通知する */
    this.paramOnChange(this.fizzBuzzParam);
  }

  /** 変更を通知する */
  paramOnChange(data: FizzBuzzParam) {
    this.fizzBuzzService.pushData(data);
  } 

}
