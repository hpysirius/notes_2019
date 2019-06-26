const arr = ['I', 'have', 'a', 'book', 'good'];
const str = 'I have a good book';
const t = (str, arr) => {
  const strArr = str.split(' ');
  const filterArr = strArr.filter(item => !arr.includes(item));
  return !(filterArr.length);
};
const t1 = (str, arr) => !str.split(' ').filter(i => !arr.includes(i)).length;

console.log(t1(str, arr));
