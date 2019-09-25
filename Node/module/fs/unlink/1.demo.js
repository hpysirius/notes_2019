const fs = require('fs');

fs.unlink('./file.txt', err => {
    if(err) throw err;
    console.log('文件已删除');
})

// 异步地删除文件或符号链接。 除了可能的异常，完成回调没有其他参数。
// fs.unlink() 不能用于目录。 要删除目录，则使用 fs.rmdir()。