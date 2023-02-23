import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { convertStringToArray } from '../../utils/convertStringToArray';
import { closest3Sum } from '../../utils/closest3Sum';
import { task } from 'ember-concurrency';

export default class AlgorithmClosestThreeSumController extends Controller {
    input = '';

    @tracked array = [];

    @tracked
    inputTarget = '';

    @tracked
    result = '';

    timeOutID = -1;
    time_delay = 1000;
    work_queue = [];

    @action
    createArray() {
        let newArray = convertStringToArray(this.input);
        this.array = newArray;
        this.resetCell();
    }

    @action
    resetCell() {
        this.work_queue = [];
        let cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].className = 'cell';
            cells[i].textContent = this.array[i];
        }
        clearTimeout(this.timeOutID);
        this.timeOutID = -1;
        const step = document.getElementById('step');
        if (step) step.textContent = '';
    }

    @action
    run() {
        this.resetCell();
        this.result = this.solve().toString();
        this.tick();
    }

    solve() {
        let array = [...this.array];
        let result = closest3Sum(array, this.inputTarget, this.work_queue);
        return result;
    }

    @action
    changeDelay($event) {
        this.time_delay = $event.target.value;

        document.getElementById('time-delay').innerText = `${(
            this.time_delay / 1000
        ).toFixed(2)}  s`;
    }

    tick() {
        this.timeOutID = setTimeout(() => {
            if (this.work_queue.length > 0) {
                const currentJob = this.work_queue.shift();
                const step = document.getElementById('step');
                const cells = document.getElementsByClassName('cell');
                let [currentPos, head, tail] = currentJob.data || [-1,-1,-1];
                switch (currentJob.title) {
                    case 'Computing':
                        step.textContent = currentJob.title;
                        for (let i = 0; i < cells.length; i++) {
                            cells[i].className = 'cell';
                            if (currentPos == i) cells[i].classList.add('middle');
                            if (head == i) cells[i].classList.add('head');
                            if (tail == i) cells[i].classList.add('tail');
                        }
                        break;
                    case 'Done Array':
                        step.textContent = currentJob.title;

                        for (let i = 0; i < cells.length; i++) {
                            cells[i].textContent = currentJob.data[i];
                        }
                        break;
                    case 'Start Sorting Array':
                        step.textContent = currentJob.title;
                        break;

                    case 'Finish':
                        step.textContent = currentJob.title;
                        [currentPos, head, tail] = currentJob.data;
                        for (let i = 0; i < cells.length; i++) {
                            cells[i].className = 'cell';
                            if (currentPos == i) cells[i].classList.add('result');
                            if (head == i) cells[i].classList.add('result');
                            if (tail == i) cells[i].classList.add('result');
                        }
                        break;
                    default:
                        console.log('Invalid action');
                }
            }
            this.tick();
        }, this.time_delay);
    }
}
