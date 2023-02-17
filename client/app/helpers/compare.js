import { helper } from '@ember/component/helper';

export default helper(function compare(values) {
  let [elements] = [...values];
  if (elements.length < 2) return true;
  for (let i = 1; i < elements.length; i++) {
    if (elements[0] != elements[i]) return false;
  }
  return true;
});
