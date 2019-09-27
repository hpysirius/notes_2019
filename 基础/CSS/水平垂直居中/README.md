1. Flex
> 父级元素设置
```js
display: flex;
justify-content: center;
align-items: center;
```

2. 定位 + transform
> 子元素
```
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

3. 定位 + 负margin
> 子元素
```
position: relative;
left: 50%;
top: 50%;
margin-left: -50px;
margin-top: -50px;
```

4. 绝对定位 + margin: auto
> absolute :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位
```
#parent {
    position: relative;
}
#child {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
```

5. table-cell实现居中
```
border: 1px solid #ddd;
display:table-cell;
text-align:center;
vertical-align: middle;
```