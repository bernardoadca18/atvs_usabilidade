const result_element = document.getElementById("result_element");
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

let operation = "";
let first_number = "";
let second_number = "";
let result = "0";


function clear_result() {
    result = "0";
    result_element.innerText = result;
}

function click_number(button)
{
    if (first_number.length < 11)
    {
        if (first_number == "")
        {
            first_number = button.innerText;
        }
        else
        {
            first_number += button.innerText;  
        }
    }

    result = first_number;
    result_element.innerText = result;
}

function handle_result_font()
{
    let text_len = result_element.innerText.length;
    let new_size = Math.max(result_min_font_size, result_max_font_size - text_len*4);
    result_element.style.fontSize = `${new_size}px`;
}
