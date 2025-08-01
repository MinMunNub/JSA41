// bai1
const arr = [6, 89, 90, 23, 5, 9];

let tong = 0;
let chan = [];
let le = [];

for (let i = 0; i < arr.length; i++) {
  tong += arr[i];
  if (arr[i] % 2 === 0) chan.push(arr[i]);
  else le.push(arr[i]);
}

let chuoi = "";
for (let i = 0; i < arr.length; i++) {
  chuoi += arr[i];
  if (i < arr.length - 1) chuoi += " + ";
}
chuoi += " = " + tong;

console.log("Mang chan:", chan);
console.log("Mang le:", le);
console.log("Tong:", chuoi);



// bai2
let duLieu = [];

function nhap(text) {
  duLieu.push(text);
  console.log("Da nhap:", text);
}

// test
nhap("xin chao");
nhap("toi dang hoc js");
nhap("rat don gian");



// bai3
let hinh = "vuong";

function chuyenHinh() {
  if (hinh === "vuong") {
    hinh = "tron";
  } else {
    hinh = "vuong";
  }
  console.log("Hinh hien tai:", hinh);
}

// test
chuyenHinh(); // tron
chuyenHinh(); // vuong
chuyenHinh(); // tron

