//Destructuring la cu phap cho phep giai nen cac phan tu cua mang hoac la thuoc tinh tu cac doi tuong va gan vao cac bien rieng biet 1 cach de dang

// cach thong thuong 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [x, y, z] = numbers;
//let [a, b, c] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(numbers[0]); // 1

// cach 2
let [a, b, ...c] = numbers;
console.log(c) // [3, 4, 5, 6, 7, 8, 9, 10]

// hoan doi gia tri
let m = 10, n = 5;
[m, n] = [n, m];
console.log(m); // 5
console.log(n); // 10
// object destructuring
const student1 = {
    id: 101,
    name: 'Anisul Islam',
    gpa: 3.92
}

//let {id, name, gpa} = student1;
console.log(id); // 101
console.log(name); // Anisul Islam
console.log(gpa); // 3.92
//let {name, country = 'Vietnam'} = student1; // set mac dinh neu kh co thuoc tinh country thi no se dung gia tri mac dinh Vietnam
console.log(name); // undefined
console.log(country); // Vietnam

// object destructuring long nhau
const student2 = {
    id: 101,
    name: 'Anisul Islam',
    gpa: 3.92,
    address: {
        city: 'Hanoi',
        country: 'Vietnam'
    }
}
let {name, address} = student2;
console.log(name); // Anisul Islam
console.log(address.city); // Hanoi

// ham 
const student3 = (student) => {
    console.log(`${student.name} - ${student.gpa}`);
}
// ham co destructuring
const student4 = ({name, gpa}) => {
    console.log(`${name} - ${gpa}`);
}
const sInfo = {
    name: 'Anisul Islam',
    gpa: 3.92
}
student3(sInfo);
student4(sInfo); // Anisul Islam - 3.92
// Array Destructuring	Truy cập nhanh các phần tử trong mảng và gán vào biến.
// Object Destructuring	Giải nén thuộc tính của đối tượng và gán vào biến.
// Giá trị mặc định	Thiết lập giá trị mặc định cho các thuộc tính không tồn tại.
// Giải nén đối tượng lồng nhau	Truy cập trực tiếp các thuộc tính con trong đối tượng.
// Destructuring Function Arguments	Truyền tham số hàm dưới dạng đối tượng và giải nén các thuộc tính cần thiết.