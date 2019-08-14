import { Injectable } from '@angular/core';
import { FizzBuzzParam } from './fizz-buzz-param';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  /** FizzBuzzのパラメータを保持 */
  fizzBuzzParam: FizzBuzzParam;  

  constructor() {
  }

  /** FizzBuzzを計算する */
  getFizzBuzz(): string[] {
    const num = this.fizzBuzzParam.num;
    const fizz = this.fizzBuzzParam.fizz;
    const buzz = this.fizzBuzzParam.buzz;

    const list = Array.from(new Array(num)).map((_, i) => i + 1);
    const result = list.map(v => {
      if(v % fizz === 0 && v % buzz === 0) return "FizzBuzz";
      if(v % fizz === 0) return "Fizz";
      if(v % buzz === 0) return "Buzz";
      return '' + v;
    });
    
    return result;
  }
}
