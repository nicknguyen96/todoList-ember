import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { convertStringToArray } from '../../utils/convertStringToArray';

export default class BstController extends Controller {
  @tracked bst = [];
  // each element will be in format old head, old tail, old middle, new head, new tail, new middle
  queue_action = [];
  @tracked target_value = '';
  input = '';
  time_delay = 1000;
  @tracked result = '';
  @action
  create() {
    let newArray = convertStringToArray(this.input);
    if (this.result != '') {
      let result = document.getElementsByClassName('result')[0];
      if (result) result.classList.remove('result');
    }
    this.bst = [...newArray];
  }

  @action
  changeDelay($event) {
    this.time_delay = $event.target.value;

    document.getElementById('time-delay').innerText = `${(
      this.time_delay / 1000
    ).toFixed(2)}  s`;
    console.log(this.time_delay);
  }

  @action
  solve() {
    if (this.result != '') {
      let result = document.getElementsByClassName('result')[0];
      if (result) result.classList.remove('result');
    }
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].className = 'cell';
    }
    this.result = this.run().toString();

    this.tick();
  }

  tick() {
    let cells = document.getElementsByClassName('cell');
    if (this.queue_action.length == 0) return;
    const positions = this.queue_action.shift();
    const [oldHead, oldTail, oldMiddle, newHead, newTail, newMiddle] =
      positions;
    if (oldHead != -1) {
      cells[oldHead].classList.remove('head');
    }
    if (oldTail != -1) {
      cells[oldTail].classList.remove('tail');
    }
    if (oldMiddle != -1) {
      cells[oldMiddle].classList.remove('middle');
    }
    if (newHead != -1) {
      cells[newHead].classList.add('head');
    }
    if (newTail != -1) {
      cells[newTail].classList.add('tail');
    }
    if (newMiddle != -1) {
      if (newHead == -1 && newTail == -1) {
        cells[newMiddle].classList.add('result');
      } else {
        cells[newMiddle].classList.add('middle');
      }
    }
    setTimeout(() => {
      this.tick();
    }, this.time_delay);
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
