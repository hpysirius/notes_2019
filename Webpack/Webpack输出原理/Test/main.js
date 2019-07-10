// 异步加载 showModule.js
import('./showModule').then((show) => {
    // 执行 show 函数
    show('Webpack');
  });
  