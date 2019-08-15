import { Component, OnInit, Input } from '@angular/core';
import { FizzBuzzService } from '../fizz-buzz.service';

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
    /** リストの変化を監視 */
    this.fizzBuzzService.fizzBuzzList$.subscribe(list => {
      const result = divide(list, 10);
      this.fizzBuzzList = result;
    })
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