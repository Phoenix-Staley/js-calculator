const calculator_el = document.querySelector("#calculator");
const output_el = document.querySelector("#output");
let last_input;
let working_input = [];
let result;
let current_operator;

function set_operator(sign) {
    current_operator = sign;
}

function handle_calc_click(event) {
    const pressed = event.target;
    console.log(working_input);
    if (pressed.classList.contains("num")) {
        working_input.push(event.target.getAttribute("data-num"));
        output_el.value = working_input.join("");
    } else if (pressed.classList.contains("operator") && last_input) {
        last_input = JSON.parse(working_input.join(""));
        working_input = [];
        output_el.value = "";
        set_operator(pressed.innerHTML);
    } else if (pressed.id === "enter") {
        if (current_operator === "+") {
            result = last_input + working_input.join("");
        }
        output_el.value = result;
    }
}

calculator_el.addEventListener("click", handle_calc_click);