let quantity_inc_button = document.getElementById("quantity_inc_button")
let quantity_dec_button = document.getElementById("quantity_dec_button")

quantity_inc_button.addEventListener("click", (event) => {
    const quentity = document.getElementById("quantity_input")
    const qvalue = 1 + parseInt(quentity.value)
    quentity.value = qvalue

})
quantity_dec_button.addEventListener("click", (event) => {
    const quentity = document.getElementById("quantity_input")
    const qvalue = parseInt(quentity.value) - 1
    if (qvalue >= 0) {
        quentity.value = qvalue
    }

})



// card backdrop
const cards = document.querySelectorAll(".cards")
console.log(cards)
function show_backdrop(event) {
    // console.log(event)
    // console.log(event.target)
    console.log(this.querySelector(".cards-backdrop"))
    this.querySelector(".cards-backdrop").classList.remove("d-none")

}
function hidden_backdrop(event) {
    // console.log(event)
    // console.log(event.target)
    console.log(this.querySelector(".cards-backdrop"))
    this.querySelector(".cards-backdrop").classList.add("d-none")

}

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

addEventListenerList(cards, 'mouseover', show_backdrop);
addEventListenerList(cards, 'mouseout', hidden_backdrop);
// card backdrop end

// login validation


const email = document.getElementById('loginEmail');
email.addEventListener('keyup', emailValidity);
const pass = document.getElementById('loginPass');
pass.addEventListener('keyup', passwordValidity);

function emailValidity(event) {
    var emailValue = email.value;
    var validformat = /^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

    if (validformat.test(emailValue)) {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }
    else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }
}
function passwordValidity(event) {
    var passValue = pass.value;
    var passlength = /^.{10,}$/;///length checking
    var passCapitalChecking = /[A-Z]+/;///capital checking
    var passLowercase = /[a-z]+/;///lowercase checking
    var passSpecial = /^.*[^A-Za-z0-9].*$/;///special character checking

    if (passlength.test(passValue) && passCapitalChecking.test(passValue) && passLowercase.test(passValue) && passSpecial.test(passValue)) {
        pass.classList.add('is-valid');
        pass.classList.remove('is-invalid');
    }
    else {
        pass.classList.add('is-invalid');
        pass.classList.remove('is-valid');
    }
}
// login validation end

// Registation validation 

const regEmail = document.getElementById('regEmail');
regEmail.addEventListener('keyup', regemailValidity);
const regPass = document.getElementById('inputPassword');
regPass.addEventListener('keyup', regpasswordValidity);
const reChackRegPass = document.getElementById('ReChackinputPassword');
const phone =document.getElementById('phone')
phone.addEventListener('keyup',function(event){
    const numberRegex=/^(\+\d{1,3}[- ]?)?\d{11}$/;
    if(numberRegex.test(this.value)){

        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
    }
    else {
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
    }

});
reChackRegPass.addEventListener("keyup", (event) => {
    console.log("inside REchack pass ")
    const p1 = regPass.value
    const p2 = reChackRegPass.value
    if (p1 === p2) {
        reChackRegPass.classList.add('is-valid');
        reChackRegPass.classList.remove('is-invalid');
    }
    else {
        reChackRegPass.classList.add('is-invalid');
        reChackRegPass.classList.remove('is-valid');
    }
})

function regemailValidity(event) {
    console.log("inside email ")
    let regEmailvalue = regEmail.value;
    var validformat = /^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

    if (validformat.test(regEmailvalue)) {
        regEmail.classList.add('is-valid');
        regEmail.classList.remove('is-invalid');
    }
    else {
        regEmail.classList.add('is-invalid');
        regEmail.classList.remove('is-valid');
    }
}
function regpasswordValidity(event) {
    console.log("inside pass ")
    let passValue = regPass.value;
    let passlength = /^.{10,}$/;///length checking
    let passCapitalChecking = /[A-Z]+/;///capital checking
    let passLowercase = /[a-z]+/;///lowercase checking
    let passSpecial = /^.*[^A-Za-z0-9].*$/;//special character checking

    if (passlength.test(passValue) && passCapitalChecking.test(passValue) && passLowercase.test(passValue) && passSpecial.test(passValue)) {
        regPass.classList.add('is-valid');
        regPass.classList.remove('is-invalid');
    }
    else {
        regPass.classList.add('is-invalid');
        regPass.classList.remove('is-valid');
    }
}

// Add product form validation


const inputFastName = document.getElementById('inputFastName');
inputFastName.addEventListener('keyup', nameValidation);
const inputLastName = document.getElementById('inputLastName');
inputLastName.addEventListener('keyup', nameValidation);
const inputCity = document.getElementById('inputCity');
inputCity.addEventListener('keyup', nameValidation);
const inputZipCode = document.getElementById('inputZipCode');
inputZipCode.addEventListener('keyup', zipValidation);



function nameValidation(event) {
    var productValue = this.value;
    var nameVlaidator = /^[a-zA-Z\.]{1,50}$/;

    if (nameVlaidator.test(productValue)) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
    }
    else {
      this.classList.add('is-invalid');
      this.classList.remove('is-valid');
    }
}
function zipValidation(event) {
    var productValue = this.value;
    var nameVlaidator = /^[a-zA-Z0-9]{1,50}$/;

    if (nameVlaidator.test(productValue)) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
    }
    else {
      this.classList.add('is-invalid');
      this.classList.remove('is-valid');
    }
}
// Add product form validation end

// Registation validation end
