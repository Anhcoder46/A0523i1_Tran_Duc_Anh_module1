function doiDoC() {
    let doC = parseFloat(document.getElementById("doC").value);
    let doF = (doC * 9) / 5 + 32;
    document.getElementById("doF").innerHTML = doF.toFixed(2);
}