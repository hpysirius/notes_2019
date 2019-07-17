let count = 1
let setCount = () => {
  count++
}

setTimeout(() => {
  console.log('a', count)
}, 1000)
export {
  count,
  setCount
}