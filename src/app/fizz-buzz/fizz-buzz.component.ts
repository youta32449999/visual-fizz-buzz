import { Component, OnInit, Input } from '@angular/core';
import { FizzBuzzService } from '../fizz-buzz.service';
import { FizzBuzzParam } from '../fizz-buzz-param';


@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {

  /** 親からパラメータを受け取る */
  @Input() 
  set fizzBuzzNum(num: number) {
    this.fizzBuzzService.fizzBuzzParam.num = num;
    this.getFizzBuzz();
  }

  @Input() 
  set fizz(fizz: number) {
    this.fizzBuzzService.fizzBuzzParam.fizz = fizz;
    this.getFizzBuzz();
  }

  @Input() 
  set buzz(buzz: number) {
    this.fizzBuzzService.fizzBuzzParam.buzz = buzz;
    this.getFizzBuzz();
  }

  /** テンプレート表示用 */
  fizzBuzzList: string[][];

  constructor(private fizzBuzzService: FizzBuzzService) { 

  }

  ngOnInit() {
    this.getFizzBuzz();
  }

  /** FizzBuzzの配列を更新する */
  getFizzBuzz() {
    this.fizzBuzzList = divide(this.fizzBuzzService.getFizzBuzz(), 10);
  }
}

/** 配列を指定した要素ずつに区切る */
function divide(list: any[], num: number): any[][] {
  const result: any[][] = list.reduce(
    (acc: any[][], item: any, index: number) => {
      if(index % num === 0) {
        acc.push(list.slice(index, index+num));
      }
      return acc;
    }, []);
  return result;
};