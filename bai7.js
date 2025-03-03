let a = Number(prompt("Nhap so a: "));
let b = Number(prompt("Nhap so b: "));
let c = Number(prompt("Nhap so c: "));
let max = a > b ? (a > c ? a : c) : b > c ? b : c;
alert("So lon nhat trong 3 so la:" + max);
