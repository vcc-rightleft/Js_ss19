let menu = prompt("Chuyen doi tien te\n1. USD -> VND\n2. VND -> USD");
if (menu == 1) {
    let usd = Number(prompt("Nhap vao so tien USD: "));
    let vnd = usd * 23000;
    alert("So tien VND tuong ung la: " + vnd);
} else if (menu == 2) {
    let vnd = Number(prompt("Nhap vao so tien VND: "));
    let usd = vnd / 23000;
    alert("So tien USD tuong ung la: " + usd.toFixed(2));
} else {
    alert("Ban nhap sai, vui long chon lai");
}