function result() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (height ** 2);
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese");
}