let string = prompt("Nhap vao chuoi: ");
let a = string.indexOf(" ");
if (a>=0) {
    alert("Chuoi co khoang trang");
} else {
    alert("Chuoi khong co khoang trang");
}