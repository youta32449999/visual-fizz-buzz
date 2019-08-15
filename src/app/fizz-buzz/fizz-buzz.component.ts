import { Component, OnInit, Input } from '@angular/core';
import { FizzBuzzService } from '../fizz-buzz.service';
import { FizzBuzzParam } from '../fizz-buzz-param';


@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {

  /** テンプレート表示用 */
  fizzBuzzList: string[][];

  constructor(private fizzBuzzService: FizzBuzzService) { 
  }

  ngOnInit() {
    /**パラメータの変化を監視 */
    this.fizzBuzzService.fizzBuzzParam$.subscribe(data => {
      const result = this.fizzBuzzService.getFizzBuzz(data);
      /** 　パラメータが変化したら表示を更新 */
      this.fizzBuzzList = divide(result, 10);
    });
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