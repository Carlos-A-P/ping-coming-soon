//get elements by their id's to use them in js
const form = document.getElementById("form");
const email = document.getElementById("email");

//add a event listener for button to start program
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
   //get values from the inputs
   //trim function removes all of the white space
   const emailValue = email.value.trim();

   if(emailValue === ''){
       console.log("error")
       //show error
       //add error class with error function
        setErrorFor(email, 'Whoops! It looks like you forgot to add your email');
   }  else if(!isEmail(emailValue)){
        setErrorFor(email, 'Please provide a valid email address')
   }  else {
        setSuccessFor(email, 'Success!')
   }
}

//-------------------validation functions

function setErrorFor(input, message){
    const formControl = input.parentElement;
    //.form-control

    //selecting the child element "small"
    const small = formControl.querySelector('small');

    //add message
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input, message){
    const formControl = input.parentElement;
    //.form-control

    //selecting the child element "small"
    const small = formControl.querySelector('small');

    //add message
    small.innerText = message;

    //add error class
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
