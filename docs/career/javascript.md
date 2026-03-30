## `var`,`let`,`const`的区别
1. `var`能重复声明
2. `var`存在变量提升（声明会提升到作用域最前面）, `let`, `const`存在暂时性死区（未声明前不能使用） 
3. `var`最小作用域为函数作用域, `let`, `const`有块作用域 
4. `const`声明的变量不能再次赋值

## `null`, `undefined`的区别
1. `null`表示空对象 
2. `undefined`表示已经声明但是未赋值，对象中不存在的属性

## 数据类型
1. `JavaScript`中的数据类型分为基本类型和引用类型 
2. 基本数据类型: `String`, `Number`, `string`, `Boolean`, `Undefined`, `Symbol`, `BigInt`, `Null` 
3. 引用数据类型: `Object`, `Array`, `Function`等

## 如何判断数据类型
1. `typeof` 是否用于判断除`Null`外的基本类型和函数 
2. `instanceof` 用于检测对象是否是某构造函数的实例（检查原型链） 
3. 通过对象的 constructor 获取构造函数 
4. `Object.prototype.toString.call()` 通用且准确

## 深拷贝
1. 基本类型赋值即深拷贝，深拷贝只适用于引用类型 
2. 扩展运算符 ... 浅拷贝 
3. `Object.assign()`浅拷贝 
4. `JSON.parse(JSON.stringify())`缺点：无法处理`Null`, `Undefined`,`Symbol`, 日期，函数等，无法处理循环引用，会丢失原型链信息 
5. `structuredClone()` 无法拷贝函数 
6. `loadsh` 等三方库
7. 通过递归自己实现

## `this`指向
1. 作为对象方法调用时，指向调用对象
2. 作为构造函数使用，指向新创建的对象实例 
3. 作为普通函数独立调用时，非严格模式指向`window`，严格模式为`undefined` 
4. `call`, `apply`, `bind` 为显示绑定，当指定对象不是`undefined`, `null` 时，为指定对象，否则为`window` 
5. 箭头函数中的 this 继承自外层作用域(跟定义位置有关，跟调用位置无关)

## 闭包

## 防抖和节流
1. 防抖：在事件触发后，等待一段时间再执行回调。 
2. 节流：在一定时间内只执行一次回调。
```javascript
// 防抖
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 节流
function throttle(func, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            func.apply(this, args);
            lastTime = now;
        }
    };
}
```