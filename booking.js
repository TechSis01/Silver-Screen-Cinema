
const movieTimeButtons = document.querySelectorAll('.choose-time-btn')
for(const movieTimeBtn of movieTimeButtons){
  
    movieTimeBtn.addEventListener('click',function(){
       movieTimeBtn.style.backgroundColor = '#5f379f'
    })
}

const priceOfMovie = 2000
//select quantity input
const qty = document.querySelector('#qty')
//select total price paragraph
const totalMoviePrice = document.querySelector('#total')
qty.addEventListener('input',function(e){
    let totalQty = qty.value 
    let totalPrice = priceOfMovie * totalQty
    totalMoviePrice.innerHTML = totalPrice

})
//selecting modalcontainer
const modalContainer = document.querySelector('#main-modal')
//selecting book a ticker button

const openModal = document.querySelector('#book-ticket-btn')
openModal.addEventListener('click',function(){
  modalContainer.style.display = 'block'
})
//select span x
const closeModal = document.querySelector('.x')
closeModal.addEventListener('click',function(){
    modalContainer.style.display = 'none'
})

//Event to close modal by clicking outside
window.addEventListener('click',function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
})

//select form
const form = document.querySelector('form')
//select payment button
const paymentBtn = document.querySelector('#pay')
//select email input

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nameInput= document.querySelector('#firstName')
    let userName = nameInput.value
    const feedback = document.createElement('p')
    feedback.innerText = `Dear ${userName} your ticket details will be sent immediately to your email address,check back in 5 miniutes.`
    paymentBtn.insertAdjacentElement('afterend',feedback) 
    feedback.style.fontSize = '1.4rem'
},{once:true})

const firstNameError = document.querySelector('#nameError')
const emailError = document.querySelector('#emailError')

let input = document.querySelector('.name')

input.addEventListener('keyup', function(){
    let myName = input.value
    if(myName.length == 0){
        firstNameError.innerHTML = 'invalid name'
        input.style.borderColor = 'red'
        return false;
    }
    else{
        firstNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        input.style.borderColor = 'green'
        return true;
    }
})
let input2 = document.querySelector('#email')
input2.addEventListener('keyup',function(){
    let userEmail = input2.value
    if(userEmail.length == 0){
        emailError.innerHTML = 'invalid email'
        input.style.borderColor = 'red'
        return false;
    }
    else if(!userEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'invalid email'
        input.style.borderColor = 'red'
        return false;
    }
    else{
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        input.style.borderColor = 'green'
        return true;
    }
})
let cardNum = document.querySelector('#card')
cardNum.addEventListener('keyup', function(){
    let cardNumber = cardNum.value
    if(cardNumber.length == 0){

    }
})