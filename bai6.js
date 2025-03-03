let a = Number(prompt("Nhap so a: "));
let b = Number(prompt("Nhap so b: "));
let c = Number(prompt("Nhap so c: "));
let delta = b * b - 4 * a * c;
if (delta < 0) {
    alert("Phuong trinh vo nghiem");
} else if (delta == 0) {
    let x = -b / (2 * a);
    alert("Phuong trinh co nghiem kep x = " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phuong trinh co 2 nghiem phan biet x1 = " + x1 + " va x2 = " + x2);
}
