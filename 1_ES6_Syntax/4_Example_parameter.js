"use strict"
function message(text = "Hello World") {
    console.log(text);
}
// function message(text) {
//     console.log(text);
// }
// message(); //in ra undefined

message(); //in ra Hello World -> in ra tham so mac dinh
message("Hi"); // thay doi tham so mac dinh

// rest tham so mac dinh
// de rest tham so : cho phep gom cac tham so con lai vao 1 mang -> dung ...
// function message(text = "Hello World", ...args) {
//     console.log(text, args);
// }
function printNumber(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
printNumber(1,2,3,4,5,6,7,8,9,10); // x = 1, y = 2, z = 3, 4, 5, 6, 7, 8, 9, 10
