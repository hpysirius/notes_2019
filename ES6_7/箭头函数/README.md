### 箭头函数this
所谓的定义时候绑定，就是this是继承自父执行上下文！！中的this，比如这里的箭头函数中的this.x，箭头函数本身与say平级以key:value的形式，也就是箭头函数本身所在的对象为obj，而obj的父执行上下文就是window，因此这里的this.x实际上表示的是window.x，因此输出的是11



参考文章
1. [深入理解ES6箭头函数中的this](https://zhuanlan.zhihu.com/p/26475137)