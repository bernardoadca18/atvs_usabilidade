const result_element = document.getElementById("result_element");
const operation_element = document.getElementById("operation_element");
const clear_button_element = document.getElementById("clear_button");
const plus_minus_button_element = document.getElementById("plus_minus_button");
const modulus_button_element = document.getElementById("modulus_button");
const division_button_element = document.getElementById("division_button");
const button_seven_element = document.getElementById("button_seven");
const button_eight_element = document.getElementById("button_eight");
const button_nine_element = document.getElementById("button_nine");
const multiply_button_element = document.getElementById("multiply_button");
const button_four_element = document.getElementById("button_four");
const button_five_element = document.getElementById("button_five");
const button_six_element = document.getElementById("button_six");
const subtract_button_element = document.getElementById("subtract_button");
const button_one_element = document.getElementById("button_one");
const button_two_element = document.getElementById("button_two");
const button_three_element = document.getElementById("button_three");
const add_button_element = document.getElementById("add_button");
const button_zero_element = document.getElementById("button_zero");
const decimal_button_element = document.getElementById("decimal_button");
const equals_button_element = document.getElementById("equals_button");

const result_max_font_size = 80;
const result_min_font_size = 20;

const result_max_len = 11;

let operation = "";
let first_number = "";
let second_number = "";
let result = "0";
let is_result_displayed = false;

function clear_result() 
{
  operation = "";
  first_number = "";
  second_number = "";
  result = "0";
  result_element.innerText = result;
  operation_element.innerText = "";
  is_result_displayed = false;
}


function click_number(button) {
  let number = button.innerText;

  if (is_result_displayed) {
    first_number = "";
    second_number = "";
    is_result_displayed = false;
  }

  if (operation === "") {

    if (first_number.length < result_max_len) {
      if (number === "." && first_number.includes(".")) return;
      first_number = first_number === "0" ? number : first_number + number;
    }
    result_element.innerText = first_number;
  } else {

    if (second_number.length < result_max_len) {
      if (number === "." && second_number.includes(".")) return;
      second_number = second_number === "0" ? number : second_number + number;
    }
    result_element.innerText = second_number;
  }
}

function click_operation(button) {
  let new_operation = button.innerText;

  if (first_number !== "" && second_number !== "") {
    calculate_result();
    first_number = result.toString();
    second_number = "";
  }

  operation = new_operation;
  operation_element.innerText = operation;
  is_result_displayed = false;
}

// Função de cálculo
function calculate_result() {
  if (first_number !== "" && second_number !== "" && operation !== "") {
    let num1 = parseFloat(first_number);
    let num2 = parseFloat(second_number);

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        return;
    }

    result = result.toFixed(2);

    result_element.innerText = result;
    operation_element.innerText = "";
    is_result_displayed = true;
  }
}

equals_button_element.addEventListener("click", () => {
  calculate_result();
  operation = "";
});
