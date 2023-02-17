import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoadingService extends Service {
  @tracked isLoading = false;

  @action
  turnLoadingOn() {
    this.isLoading = true;
  }

  @action
  turnLoadingOff() {
    this.isLoading = false;
  }
}
