```
window.location.hash = 'qq' // 设置 url 的 hash，会在当前url后加上 '#qq'

var hash = window.location.hash // '#qq'  

window.addEventListener('hashchange', function(){ 
    // 监听hash变化，点击浏览器的前进后退会触发
})
```