import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  show = false;
  target = '';

  @action
  onShow(element) {
    this.target = element.target.getAttribute('target-menu') || this.target;
    if (!this.show) {
      document.getElementById(this.target).classList.add('show');
      this.show = true;
    } else {
      document.getElementById(this.target).classList.remove('show');
      this.show = false;
    }
  }
}
