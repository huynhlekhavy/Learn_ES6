// toan tu spread va tham so rest co cu phap ... 
// spread giai nen cac phan tu cua mang, rest dong goi cac phan tu vao mot mang

function sum(x, y, z) {
    return x + y + z;
  }
  let numbers = [1, 2, 3];
  console.log(sum(...numbers)); // 6 -> giai nen cac phan tu cua mang numbers vao cac tham so x, y, z

  let allNumbers = [4, 5, ...numbers];
  console.log(`allNumbers = ${allNumbers}`); // [4, 5, 1, 2, 3] // gom cac phan tu cua mang numbers vao mang allNumbers

  let allNumbers2 = [...numbers, 4, 5];
  console.log(`allNumbers2 = ${allNumbers2}`); // [1, 2, 3, 4, 5]

  let allNumbers3 = [...numbers, ...numbers];
  console.log(`allNumbers3 = ${allNumbers3}`); // [1, 2, 3, 1, 2, 3]

  let allNumbers4 = [4, ...numbers, 5]; // [4, 1, 2, 3, 5]
  console.log(`allNumbers4 = ${allNumbers4}`);

  // noi mang concatenate arrays

  let oldNumbers = [1, 3, 5, 9];
  let evenNumbers = [2, 4, 6, 8, 10];

  let totalNumbers = [...oldNumbers, ...evenNumbers];
  console.log(`totalNumbers = ${totalNumbers}`); // [1, 3, 5, 9, 2, 4, 6, 8, 10]

  //sao chep 
  let copyNumbers = [...totalNumbers];
  console.log(`copyNumbers = ${copyNumbers}`); // [1, 3, 5, 9, 2, 4, 6, 8, 10]
  // thao tac voi chuoi

  let name = ['A', ...'FPT', 'C'];
  console.log(`name = ${name}`); // ['A', 'F', 'P', 'T', 'C']

  // thao tac voi object
  let personInfo1 = {name: 'John', age: 30},
    personInfo2 = {id: '123', nationality: 'Vietnamese'};
    console.log(personInfo1); // {name: 'John', age: 30}
    let personInfo3 = {...personInfo1, ...personInfo2};
    console.log(personInfo3); // {name: 'John', age: 30, id: '123', nationality: 'Vietnamese'}