// 异步加载 show.js
import('./show').then(({ show }) => {
  show('hello')
})
import('./con').then(({ con }) => {
  con('hpysirius')
})