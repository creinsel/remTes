'use strict';

// import {user} from './users.js';

let userInfo;
const emailInput = document.querySelector('.emailIn');
const pwdInput = document.querySelector('.pwdIn');
const loginAccont = document.querySelector('.loginAcc');
const hiYou= document.querySelector('.logInHi');

loginAccont.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    userInfo = proctors.find(proctor => proctor.email=== emailInput.value)
 
    console.log(userInfo)

    if (userInfo?.password === pwdInput.value){
        alert('logged in hoe');
        emailInput.value = pwdInput.value = '';

        hiYou.textContent= `Hello ${userInfo.name}!!!`

    }else{
        alert('nooooo')
    }; 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    
  });
