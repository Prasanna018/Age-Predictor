let input = document.querySelector(".input");
const apiUrl = "https://api.agify.io/?name=";
let submit = document.querySelector("#submit");
let display = document.querySelector(".display");

async function getAge() {
    try {
        if (input.value) {
            let response = await fetch(apiUrl + input.value);
            let data = await response.json();

            display.innerText = data.age;
        }
        else {
            display.innerText = "please enter the name";
        }

    } catch (error) {
        display.innerText = error;

    }
}


submit.addEventListener("click", getAge);