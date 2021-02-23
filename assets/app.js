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


showLog? showAf.style.display = 'none': showAf.style.display = 'null';


loginAccont.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    userInfo = proctors.find(proctor => proctor.email=== emailInput.value)
 
    console.log(userInfo)

    if (userInfo?.password === pwdInput.value){
         alert('Logged in!');
         showLog= false;
        emailInput.value = pwdInput.value = '';
        hideAf.style.display = "none";
        hiYou.textContent= `Hello ${userInfo.name}!!!`

    }else{
        alert('Incorrect password');
        showLog=true;
        
    }; 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    
  });
