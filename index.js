const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password two');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('section');

    checkInputs();

});

function checkInputs(){
    // console.log("check inputs");
       const usernameValue = username.value.trim();
       const emailValue = email.value.trim();
       const passwordValue = password.value.trim();
       const password2Value = password2.value.trim();

       if(usernameValue === ''){
           setErrorfor(username, 'Username cannot be blank');
       }else
       {
           setSuccessfor(username);
       }

       if(emailValue === ''){
           setErrorfor(email, 'Email cannot be blank');
       } else{
           if(!isEmail(emailValue)){
               setErrorfor(email,'Email is not valid' );
           }
           else{
               setSuccessfor(email);
           }
       }

       if(passwordValue === ''){
           setErrorfor(password, 'Password cannot be blank');

       }
       else{
           setSuccessfor(password);
       }

       if(password2 === ''){
           setErrorfor(password2, 'Password2 cannot be blank')
       }
       else {
        if(passwordValue !==  password2Value){
            setErrorfor(password2, 'Password does not match');
        }
        else{
         setSuccessfor(password2);
        }
       }
       
}

function setErrorfor(input, message){
    const formControl = input.parentElement; 
    // Form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';

}

function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[A-Za-z]+$/.test(email);
}