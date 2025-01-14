// trong js, 1 bien co the dc khai bao sau khi da dc su dung
//Hoisting la hanh vi mac dinh cua js, trong do tat ca cac khai bao dc di chuyen len dau cua pham vi hien tai

fullName = "John Doe";
console.log(fullName);
var fullName; // dc vi var dc Hoisting va cho phep su dung truoc khi dc khai bao

x = 25;
console.log(x);
let x; // loi tham chieu vi let ko dc Hoisting

y = 10;
console.log(y);
//const y; // loi cu phap vi const can phai khoi tao truoc khi khai bao

"use strict"; // strict mode khong cho phep khai bao cac bien khong dc khai bao truoc, che do nghiem ngat
 z= 3.14; // loi vi x chua dc khai bao
 
