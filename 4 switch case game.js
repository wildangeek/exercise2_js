let direction = prompt("Tuliskan perintah direction anda(contoh: UP, RIGHT, BOTTOM, LEFT)");

switch (direction) {
    case "up": console.log("Karakter berjalan ke atas"); break;
    case "right": console.log("Karakter berjalan ke kanan"); break;
    case "bottom": console.log("Karakter berjalan ke bawah"); break;
    case "left": console.log("Karakter berjalan ke kiri"); break;
    default: console.log("diem aja")
}