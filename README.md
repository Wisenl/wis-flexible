# wis-flexible

this tool forked from lib-flexible ~~~
把 lib-flexible 改造了一下，更适合我自己用~
只需参照设计图的屏宽尺寸，修改代码就行了，使用时将尺寸的小数点向前移动两位（也就是除以100），就能得到rem值。
```javascript
docEl.style.fontSize = parseFloat(width / 3.75).toFixed(2) + 'px';
```

16px  --->  0.16rem
