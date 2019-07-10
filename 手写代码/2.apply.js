Function.prototype.apply2 = function (content = window) {
  content.fn = this;
  let result;
  if (arguments[1]) {
    result = content.fn(...arguments[1]);
  } else {
    result = content.fn();
  }
  delete content.fn;
  return result;
}
;
