function tinhDienTich() {
    let r = parseFloat(document.getElementById("ban_kinh").value);
    let dien_tich = Math.PI * r * r;
    document.getElementById("dien_tich").innerHTML = dien_tich.toFixed(2);
}