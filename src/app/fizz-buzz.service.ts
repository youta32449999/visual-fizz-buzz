import { Injectable } from '@angular/core';
import { FizzBuzzParam } from './fizz-buzz-param';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  /** FizzBuzzのパラメータ変化を監視 */
  private fizzBuzzParam: BehaviorSubject<FizzBuzzParam> = new BehaviorSubject<FizzBuzzParam>(new FizzBuzzParam(100, 3, 5));
  fizzBuzzParam$: Observable<FizzBuzzParam> = this.fizzBuzzParam.asObservable();

  constructor() {}

  /** 初期を取得する */
  getInitValue(): FizzBuzzParam {
    return this.fizzBuzzParam.getValue();
  }
  
  /** データをSubjectにpushする */
  pushData(data: FizzBuzzParam): void {
    this.fizzBuzzParam.next(data);
  }

  /** FizzBuzzを計算する */
  getFizzBuzz(param: FizzBuzzParam): string[] {
    const num = param.num;
    const fizz = param.fizz;
    const buzz = param.buzz;

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
