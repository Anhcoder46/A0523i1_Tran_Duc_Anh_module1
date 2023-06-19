function addToInput(val) {
    var input = document.getElementById("input");
    var lastChar = input.value.slice(-1);

    // Append the value to the input field
    if (val === "pi" || val === "e") {
        input.value += Math[val];
    } else if (/[+\-*\/\(%\^!√)]/.test(lastChar) || input.value === "") {
        // Do not add operator to empty input or after an operator or (
        if (/[+\-*\/\(%\^!√]/.test(val)) {
            return;
        }
        // Add ( after sqrt
        if (val === "(" && lastChar === "√") {
            input.value += "*(";
            return;
        }
    }
    input.value += val;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function calculate() {
    var input = document.getElementById("input");
    var expr = input.value;
    var result;

    try {
        // Use eval() to evaluate the expression
        result = eval(expr);
    } catch (e) {
        if (e instanceof SyntaxError) {
            // Handle syntax errors
            result = "Syntax Error";
        } else {
            // Handle other errors
            result = "Error";
        }
    }

    // Display the result
    input.value = result;
}