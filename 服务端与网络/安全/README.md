### xss的三种模型是啥（Cross Site Script）跨站脚本攻击
它指的是恶意攻击者往Web页面里插入恶意html代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意用户的特殊目的。  
它与SQL注入攻击类似，SQL注入攻击中以SQL语句作为用户输入，从而达到查询/修改/删除数据的目的，而在xss攻击中，通过插入恶意脚本，实现对用户游览器的控制，获取用户的一些信息。

* 反射型：经过后端，不经过数据库
* 存储型：经过后端，经过数据库
* DOM：不经过后端,DOM—based XSS漏洞是基于文档对象模型Document Objeet Model,DOM)的一种漏洞,dom - xss是通过url传入参数去控制触发的。



### csrf怎么防御(Cross Site Request Forgery) 中文是：跨站点请求伪造。
* 验证 HTTP Referer 字段；
* 在请求地址中添加 token 并验证；
* 在 HTTP 头中自定义属性并验证。

### CSRF攻击的本质原因

CSRF攻击是源于Web的隐式身份验证机制！Web的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的。CSRF攻击的一般是由服务端解决。

### CSRF工具的防御手段
1. 尽量使用POST，限制GET
2. 浏览器Cookie策略
3. 加验证码
4. Referer Check
5. Anti CSRF Token






### 怎么攻击XX的首页




参考文章
1. [关于xss的三种类型详解](https://blog.csdn.net/u012991692/article/details/79916288)
2. [CSRF攻击与防御（写得非常好）](https://blog.csdn.net/stpeace/article/details/53512283)
3. [Web安全之CSRF攻击的防御措施](https://www.cnblogs.com/cxying93/p/6035031.html)