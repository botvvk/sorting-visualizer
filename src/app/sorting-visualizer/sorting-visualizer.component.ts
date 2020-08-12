import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.css']
})
export class SortingVisualizerComponent implements OnInit {
  rArray = [];
  constructor() { }

  ngOnInit(): void {
    this.resetArray();

  }

  resetArray() {
    this.rArray = [];
    let i: number;
    for (i = 0; i < 50; i++) {
      this.rArray.push(this.randomNum(5, 500));

    }
    console.log(this.rArray)
  };

  async bubbleSort(rArray) {
    let length = this.rArray.length;
    //Number of passes
    for (let i = 0; i < length; i++) {
      //Notice that j < (length)
      for (let j = 0; j < (length); j++) {
        //Compare the adjacent positions
        if (this.rArray[j] > this.rArray[j + 1]) {
          //Swap the numbers
          await this.swap(this.rArray, j)

        }
      };
    };
  };

  async swap(array, j) {
    await this.sleep(10)
    let temp = array[j]
    array[j] = array[j + 1]
    array[j + 1] = temp
  };

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
