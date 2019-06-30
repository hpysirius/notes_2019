const fs = require('fs');

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input.txt 中的内容，并讲内容写入到output.txt文件中
readerStream.pipe(writerStream);

console.log('执行完毕');