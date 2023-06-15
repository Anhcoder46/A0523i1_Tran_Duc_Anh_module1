function tinhDiem() {
    let ly = parseFloat(document.getElementById("ly").value);
    let hoa = parseFloat(document.getElementById("hoa").value);
    let sinh = parseFloat(document.getElementById("sinh").value);
    let dtb = (ly + hoa + sinh) / 3;
    let tong = ly + hoa + sinh;
    document.getElementById("dtb").innerHTML = dtb.toFixed(2);
    document.getElementById("tong").innerHTML = tong;
}