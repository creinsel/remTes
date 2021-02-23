'use strict';

// import {user} from './users.js';

let userInfo;
const emailInput = document.querySelector('.emailIn');
const pwdInput = document.querySelector('.pwdIn');
const loginAccont = document.querySelector('.loginAcc');
const hiYou= document.querySelector('.logInHi');
let showLog = true;
const hideAf= document.querySelector('.beforeLog');
const showAf= document.querySelector('.afterLog');

hideAf.style.display = "block";





loginAccont.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    userInfo = proctors.find(proctor => proctor.email=== emailInput.value)
 
    console.log(userInfo)

    if (userInfo?.password === pwdInput.value){
         alert('Logged in!');
        emailInput.value = pwdInput.value = '';
        showAf.classList.remove('afterLog');
        hideAf.style.display = "none";
        hiYou.textContent= `Hello ${userInfo.name}!!!`;
        

    }else{
        alert('Incorrect password');
        
        
    }; 
    inputLoginUsername.value = inputLoginPin.value = '';
    
    
    
  });
