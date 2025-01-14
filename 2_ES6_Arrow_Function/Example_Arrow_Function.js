//ham truyen thong dung tu khoa function, dung trong moi ngu canh, cu phap thi dai hong ham mui ten

// ham mui ten => , bi gioi han trong han che nhu khong co this, super rieng, arguments rieng, new.target rieng

function display1() {
    console.log("display1");
}


const display2 = () => {
    console.log("display2");
}
const display3 = function() {
    return "display3";
}
// doi voi truong hop ma dung ham co 1 lenh
const display4 = () => console.log("display4");
const display5 = () => "display5";

display1();
display2();
display3();

// ham co tham so 
function add1(x,y) {
    return x + y;
}

const add2 = (x,y) => x + y;
console.log(add1(1,2));
console.log(add2(1,2));

// ket hop map va filter
var students = [
    {
        id : 101,
        name : 'Anisul Islam',
        gpa : 3.92
    },
    {
        id : 102,
        name : 'Rabeya Begum',
        gpa : 3.12
    },
    {
        id : 103,
        name : 'Rokib',
        gpa : 2.92
    },
    {
        id : 104,
        name : 'Limon',
        gpa : 4.92
    },
]
// ham truyen thong de loc sinh vien co gpt >3.5 va lay ra ten cua sinh vien
function isGoodStudent(student) {
    return student.filter(
        function(x) {
            return x.gpa > 3.5;
        }).map(
            function(y) {
                return y.name;
            })
}
console.log(isGoodStudent(students));
//ham mui ten  de lam tuong tu
const isGoodStudent1 = () => students.filter(x => x.gpa > 3.5).map(y => y.name);
console.log(isGoodStudent1());
const isGoodStudent2 = student => student.filter(x => x.gpa > 3.5).map(y => y.name); // viet tuong tu y nghia cua vong lap foreach
console.log(isGoodStudent2(students));