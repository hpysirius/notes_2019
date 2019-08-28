Function.prototype.call2 = function (content = window, ...args) {
  content.fn = this;
  const result = content.fn(...args);
  delete content.fn;
  return result;
};
