### Mysql加行锁
创建行锁条件：
1. 表中创建索引， select 。。。 where   字段（必须是索引）  不然行锁就无效。
2. 必须要有事务，这样才是 行锁（排他锁） 
3. 在select语句后面加上FOR UPDATE；



参考文章
1. [Mysql 加行锁（排他锁）](https://blog.csdn.net/m0_37506046/article/details/79961401)