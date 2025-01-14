//ES6 -> ECMAScript 2015 gioi thieu 2 tu khoa let & const
// pham vi khoi (block scope) va pham vi truy cap (global scope) -> var co the duoc khai bao lai nhung let va const khong the

var x = 10;
var x = 30; // var co the khai bao lai trong cung pham vi global
let y = 10;
if(true){
    let y = 20; // pham vi cua y chi co gia tri trong khoi if
    console.log(y); // 20
}
console.log(y); // 20
const c =20;
c =25; // ko cho phep khai bao lai, thay doi gia tri ban dau