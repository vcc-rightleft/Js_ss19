let Chucai = prompt("Mời bạn nhập để kiểm tra");
if (Chucai.length === 1) {
if (Chucai.match(/[a-zA-Z]/)) {
    alert("Ký tự "+Chucai+ "là chữ cái");
} else {
    alert("Ký tự " + Chucai + "là chữ cái");
}
} else {
    alert("Không phải chữ cái");
}
