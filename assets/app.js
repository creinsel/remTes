'use strict';

// import {user} from './users.js';

let userInfo;
const emailInput = document.querySelector('.emailIn');
const pwdInput = document.querySelector('.pwdIn');
const loginAccont = document.querySelector('.loginAcc');

loginAccont.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    userInfo = proctors.find(proctor => proctor.email=== emailInput.value)
 
    console.log(userInfo)
    
    
  });
