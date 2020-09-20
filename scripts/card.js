// card validation
const cardNumber = document.getElementById('cardNumber');
cardNumber.addEventListener('keyup', cardValidity);
function cardValidity(event) {
    console.log("card validation ")
    let cardNum = cardNumber.value;
    var validformat = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if (validformat.test(cardNum)) {
        cardNumber.classList.add('is-valid');
        cardNumber.classList.remove('is-invalid');
    }
    else {
        cardNumber.classList.add('is-invalid');
        cardNumber.classList.remove('is-valid');
    }
}
// Bkash,rocket number validation
const Rocketmobile =document.getElementById('Rocketmobile')
Rocketmobile.addEventListener('keyup',function(event){
    const numberRegex=/^\d{11}$/;
    if(numberRegex.test(this.value)){

        Rocketmobile.classList.add('is-valid');
        Rocketmobile.classList.remove('is-invalid');
    }
    else {
        Rocketmobile.classList.add('is-invalid');
        Rocketmobile.classList.remove('is-valid');
    }

});
const Bkashnumber =document.getElementById('Bkashnumber')
Bkashnumber.addEventListener('keyup',function(event){
    const numberRegex=/^\d{11}$/;
    if(numberRegex.test(this.value)){

        Bkashnumber.classList.add('is-valid');
        Bkashnumber.classList.remove('is-invalid');
    }
    else {
        Bkashnumber.classList.add('is-invalid');
        Bkashnumber.classList.remove('is-valid');
    }

});
// month year validation
const month =document.getElementById('month')
month.addEventListener('keyup',function(event){
    const numberRegex=/^(0?[1-9]|1[012])$/;
    if(numberRegex.test(this.value)){

        month.classList.add('is-valid');
        month.classList.remove('is-invalid');
    }
    else {
        month.classList.add('is-invalid');
        month.classList.remove('is-valid');
    }

});
const yearid =document.getElementById('yearid')
yearid.addEventListener('keyup',function(event){
    const numberRegex=/^(19|20)\d\d$/;
    if(numberRegex.test(this.value)){

        yearid.classList.add('is-valid');
        yearid.classList.remove('is-invalid');
    }
    else {
        yearid.classList.add('is-invalid');
        yearid.classList.remove('is-valid');
    }

});

// product counter
let quantity_in = document.getElementById("quantity_in")
let quantity_de = document.getElementById("quantity_de")
const quentity_cunt = document.getElementById("quentity_cunt")

quantity_in.addEventListener("click", (event) => {
    const quentity_cunt = document.getElementById("quentity_cunt")
    const qvalue = 1 + parseInt(quentity_cunt.innerHTML)
    quentity_cunt.innerHTML = qvalue

})
quantity_de.addEventListener("click", (event) => {
   const quentity_cunt = document.getElementById("quentity_cunt")
    const qvalue = parseInt(quentity_cunt.innerHTML) - 1
    if (qvalue >= 0) {
        quentity_cunt.innerHTML = qvalue
    }

})

//  quantity_in = document.getElementById("quantity_in")
//  quantity_de = document.getElementById("quantity_de")

// console.log(quentity_cunt.innerHTML)
// quantity_in.addEventListener("click", (event) => {
//     const quentity_cunt = document.getElementById("quentity_cunt")
//     const qvalue = 1 + parseInt(quentity_cunt.innerHTML)
//     quentity_cunt.innerHTML = qvalue

// })
// quantity_de.addEventListener("click", (event) => {
//    const quentity_cunt = document.getElementById("quentity_cunt")
//     const qvalue = parseInt(quentity_cunt.innerHTML) - 1
//     if (qvalue >= 0) {
//         quentity_cunt.innerHTML = qvalue
//     }

// })


