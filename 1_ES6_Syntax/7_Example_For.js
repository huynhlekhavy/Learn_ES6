// vi du vong lap for...of
// for...of dung de duyet qua cac doi tuong co the lap vi du nhu mang chuoi map set ...
const student1 = ["s1", "s2", "s3", "s4"];
for (let s of student1) { // duyet qua tung phan tu co trong mang va gan gia tri cua  pham tu vao bien s
    console.log(s);
}

// vi du vong lap for...in
// for...in dung de duyet qua cac thuoc tinh cua doi tuong
const student2 = {
    //key: value
    name: "John",
    age: 30,
    gpa: 3.5
};
for (let key in student2) {
    console.log(key); // in ra ten cua cac thuoc tinh key, key se dai dien cho tung ten cua thuoc tinh trong doi tuong
    console.log(student2[key]); // in ra gia tri cua cac thuoc tinh tuong ung
    //console.log(key, student2[key]); // in ra ten va gia tri cua cac thuoc tinh
}
let student3 = {
    ID: 101,
    name: "John",
    age: 30,
    gpa: 3.5
}
for (let key in student3) {
    console.log(`${key}: ${student3[key]}`); // dinh dang chuoi in ra 
}