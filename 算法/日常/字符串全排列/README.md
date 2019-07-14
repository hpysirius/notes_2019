### 题目描述
```
permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
```
### 题目思路
* 都是采用插空的方法。所以基本思路也就这样了，每次选一个字符，在剩余字符串中进行插空
* 递归

### 例子permutations('abc')
```
const permutations = string => {
    const result = [];
    if(string.length === 1){
        return [string];
    }else{
        var preResult=permutations(string.slice(1));
        for (var j = 0; j < preResult.length; j++) {
            for (var k = 0; k < preResult[j].length+1; k++) {
                 var temp = preResult[j].slice(0,k)+string[0]+preResult[j].slice(k);
                    result.push(temp);         
                }
            }
        return [...new Set(result)];
    }
}
```

### 代码分析
1. 当string = `'c'`时，退出最后一次循环
2. 核心代码
```
var preResult = permutations(string.slice(1));
for (var j = 0; j < preResult.length; j++) {
    for (var k = 0; k < preResult[j].length+1; k++) {
            var temp = preResult[j].slice(0,k)+string[0]+preResult[j].slice(k);
            result.push(temp);         
        }
    }
return [...new Set(result)];
```
3. 当`preResult = ['c'], string = "bc"`
```
当 j = 0
preResult[j] = 'c'
k = 0
preResult[j].slice(0,k) = ''    string[0] = 'b'     preResult[j].slice(k) = 'c'
temp = 'bc'

k = 1
preResult[j].slice(0,k) = 'c'    string[0] = 'b'      preResult[j].slice(k) = ''
temp = 'cb'
```
4. 当`preResult = ['bc', 'cb'], string = "abc"`，`string[0] = 'a'`就是那个插入的值
```
当 j = 0
preResult[j] = 'bc'

k = 0
preResult[j].slice(0,k) = ''      string[0] = 'a'    preResult[j].slice(k) = 'bc'
temp = 'abc'

k = 1
preResult[j].slice(0,k) = 'b'      string[0] = 'a'    preResult[j].slice(k) = 'c'
temp = 'bac'

k = 2
preResult[j].slice(0,k) = 'bc'      string[0] = 'a'    preResult[j].slice(k) = ''
temp = 'bca'
```

```

当 j = 1
preResult[j] = 'cb'

k = 0
preResult[j].slice(0,k) = ''      string[0] = 'a'    preResult[j].slice(k) = 'cb'
temp = 'acb'

k = 1
preResult[j].slice(0,k) = 'c'      string[0] = 'a'    preResult[j].slice(k) = 'b'
temp = 'cab'

k = 2
preResult[j].slice(0,k) = 'cb'      string[0] = 'a'    preResult[j].slice(k) = ''
temp = 'cba'
``` 

### 总结
1. 当`preResult = ['c'], string = "bc"`时
> 即向`'_c_'`中插入`'b'`,得到`['bc', 'cb']`
2. 当`preResult = ['bc', 'cb'], string = "abc"`，`string[0] = 'a'`就是那个插入的值
> `'_b_c_'`,`_c_b_`中插入`'a'`,得到`['abc', 'bac', 'bca', 'acb', 'cab', 'cba']`
3. `slice(0,k)`和 `slice(k)`把字符串从`k`下标切割成两部分,中间插入需要的值