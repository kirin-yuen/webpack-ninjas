// const是es2015语法，需要使用babel进行转换为浏览器能读的原生JS代码
const word = require('./module-a');
document.getElementById('box').innerText = word;