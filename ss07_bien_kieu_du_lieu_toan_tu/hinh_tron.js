function tinhChuVi() {
    let r = parseFloat(document.getElementById("ban_kinh").value);
    let chu_vi = 2 * Math.PI * r;
    document.getElementById("chu_vi").innerHTML = chu_vi.toFixed(2);
}
