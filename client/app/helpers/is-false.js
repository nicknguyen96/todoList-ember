import { helper } from '@ember/component/helper';

export default helper(function isFalse(input) {
  let [value] = [...input];
  console.log(value);
  if (Array.isArray(value)){
    return !(value.length > 0)
  }
  return !(Boolean(value));
});
