//tinh nang viet tat cho thuoc tinh cua doi tuong
function studemtInfo1(name, age) {
    return{
        name: name,
        age: age
    }
}

function studemtInfo2(name, age) {
    return{
        name, // gop 2 gia tri cung name
        age
    }
}
console.log(studemtInfo1("John", 30));
console.log(studemtInfo2("Alice", 27));

let message1 = {
    body: function() {
        return `Hello.`;
    }
};
console.log(message1.body()); // cach truyen thong

let message2 = {
    body() {
        return `Hello.`;
    }
};
console.log(message2.body()); // cach viet tat

let message3 = {
    'body name'() { // phuong thuc chua ky tu dac biet vi du nhu co khoang trong va dat trong cap dau ''
        return `Hello.`;
    }
};
console.log(message3['body name']()); //cach dac biet => object['method name']()