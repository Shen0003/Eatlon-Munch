const form = document.querySelector("form"),
      next = document.querySelector(".next"),
      back = document.querySelector(".back"),
      first_form__input = document.querySelectorAll(".first-form input");

let acceptCookies = false; 

//Ask the people whether accept the cookies
const display_cookies = () => {
    const cookies = document.querySelector(".container-cookies");
    const buttons_cookies = document.querySelectorAll(".buttons-cookies button");

    cookies.classList.add("show-cookies");

    buttons_cookies.forEach(button => {
        //whetever user accept or reject the cookies, the cookies will disappear after clicking
        button.addEventListener("click", () => {
            cookies.classList.remove("show-cookies");

            if (button.classList.contains("accept")) {
                acceptCookies = true; 
            }
        });
    });
};
//cookies contents automatically pop up when the page done for loading
window.addEventListener("load", display_cookies);

//check whether the neccesarry fields of the first page of the form whether is filled 
const validateForm = () => {
    let allFilled = true;
    first_form__input.forEach(input => {
        if (input.value == "" && input.required) {
            allFilled = false;
        }
    });
    return allFilled;
};

//if user click next button and function validateForm return true, then go to second page 
next.addEventListener("click", () => {
    if (validateForm()) {
        form.classList.add("see-second-form");
    } else {
        form.classList.remove("see-second-form");
    }
});

//click back button to show first page
back.addEventListener("click", () => form.classList.remove("see-second-form"));

//submit the form will record the cookies
const submitForm = (e) => {
    //if user no accept the cookies do nothing
    if (!acceptCookies) {
        e.preventDefault();
        alert("Please aaccept the cookies!");
        display_cookies();
        return;
    }
    e.preventDefault();//prevent the form to submit actually
    //expire date of cookies is one month
    let expDate = new Date();
    expDate.setMonth(expDate.getMonth() + 1);

    const name = document.getElementById("name").value;
    const email = document.getElementById("emailAddress").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;

    //store name and email in the cookies
    document.cookie = "Name=" + name + "; Expires=" + expDate.toUTCString() + "; path=/";
    document.cookie = "Email=" + email + "; Expires=" + expDate.toUTCString() + "; path=/";

    //store name, email, phone number, gender, age and address in local storage
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Phone Number", phone);
        localStorage.setItem("Gender", gender);
        localStorage.setItem("Age", age);
        localStorage.setItem("Address", address);
    }
    alert("Cookies stored successfully!");
}

form.addEventListener("submit", submitForm);

