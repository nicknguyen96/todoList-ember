import { helper } from '@ember/component/helper';

export default helper(function convertTime(input) {
  let [millisecond] = input;
  let second = (Number(millisecond) / 1000).toFixed(2);
  return `${second} s`;
});
