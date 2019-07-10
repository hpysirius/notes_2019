Function.prototype.call2 = function (content = window) {
  content.fn = this;
  const args = [].slice(arguments, 1);
  const result = content.fn(...args);
  delete content.fn;
  return result;
};
