'use strict';

// import {user} from './users.js';

let userInfo;
const emailInput = document.querySelector('.emailIn');
const pwdInput = document.querySelector('.pwdIn');
const loginAccont = document.querySelector('.loginAcc');
const hiYou= document.querySelector('.logInHi');
const hiYou= document.querySelector('.beforeLog');
const hiYou= document.querySelector('.afterLog');

loginAccont.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    userInfo = proctors.find(proctor => proctor.email=== emailInput.value)
 
    console.log(userInfo)

    if (userInfo?.password === pwdInput.value){
        alert('Logged in!');
        emailInput.value = pwdInput.value = '';

        hiYou.textContent= `Hello ${userInfo.name}!!!`

    }else{
        alert('Incorrect password')
    }; 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    
  });
