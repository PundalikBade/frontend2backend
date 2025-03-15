function addNumbers() {
    // Get the input values
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    // Convert them to numbers
    number1 = Number(number1);
    number2 = Number(number2);

    // Calculate the sum
    let sum = number1 + number2;

    // Display the result
    document.getElementById("result").innerText = "The sum is: " + sum;
}