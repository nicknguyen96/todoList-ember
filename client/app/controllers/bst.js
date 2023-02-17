import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fetch } from 'fetch';

export default class BstController extends Controller {
  @tracked bst = [];
  // each element will be in format old head, old tail, old middle, new head, new tail, new middle
  queue_action = [];
  target_value = '';
  input = '';
  @tracked result = '';
  @action
  create() {
    let newArray = this.input.split(' ');
    newArray = newArray.filter(str => str.trim() != '');
    if (this.result != ''){
      let result = document.getElementsByClassName('result')[0];
      if (result) result.classList.remove('result');
    }
    this.bst = [...newArray];
  }

  @action
  solve() {
    this.result = this.run();
    
    this.tick();
  }

  tick() {
    let cells = document.getElementsByClassName('cell');
    if (this.queue_action.length == 0) return;
    const positions = this.queue_action.shift();
    const [ oldHead, oldTail, oldMiddle, newHead, newTail, newMiddle ] = positions;
    console.log("cells", cells);
    console.log("cells[oldHead], ", oldHead, cells[oldHead])
    if (oldHead != -1){
      cells[oldHead].classList.remove('head');
    }
    if (oldTail != -1){
      cells[oldTail].classList.remove('tail');
    }
    if (oldMiddle != -1){
      cells[oldMiddle].classList.remove('middle');
    }
    if (newHead!=-1){
      cells[newHead].classList.add('head');
    }
    if (newTail != -1) {
      cells[newTail].classList.add('tail');
    }
    if (newMiddle != -1){
      if (newHead == -1 && newTail == -1){
        cells[newMiddle].classList.add('result');
      } else {
        cells[newMiddle].classList.add('middle');
      }
    }
    setTimeout(() => {
      this.tick();
    }, 1000)
  }

  @action
  run() {
    let head = 0;
    let tail = this.bst.length - 1;
    let middle = Math.floor((head + tail) / 2);
    this.queue_action.push([-1, -1, -1, head, tail, middle]);
    while (head < tail) {
      let current_value = this.bst[middle];
      let oldPostion = [head, tail, middle];
      if (current_value == this.target_value) {
        this.queue_action.push([...oldPostion, -1, -1, middle]);
        return middle;
      } else if (Number(current_value) < Number(this.target_value)) {
        head = middle + 1;
        middle = Math.floor((head + tail) / 2);
        this.queue_action.push([...oldPostion, head, tail, middle]);
      } else {
        tail = middle - 1;
        middle = Math.floor((head + tail) / 2);
        this.queue_action.push([...oldPostion, head, tail, middle]);
      }
    }
    let oldPostion = [head, tail, middle];
    if (this.bst[head] == this.target_value) {
      this.queue_action.push([...oldPostion, -1, -1, middle]);
      return middle;
    } else {
      this.queue_action.push([...oldPostion, -1, -1, -1]);
      return -1;
    }
  }
}
