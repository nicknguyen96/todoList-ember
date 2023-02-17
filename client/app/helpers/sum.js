import { helper } from '@ember/component/helper';

export default helper(function sum(params, { nums = [] }) {
  let [index] = params;
  let result = nums.reduce((acc, item) => acc + item, index);
  return result;
});
