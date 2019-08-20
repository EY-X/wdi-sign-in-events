document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.signin')
    const loginForm = document.querySelector('.modal')
    const loginClose = document.querySelector('.close')
    const buttonSubmit = document.querySelector('.submit')
    const userName = document.getElementById('user')
    const passWord = document.getElementById('pass')

    // When the user presses the .signin button, 
    //      display the modal window
    loginButton.addEventListener('click', function(event) {
        loginForm.style.display = 'block'
    })


    // When the user presses the .close button,
    //    hide the modal window
    loginClose.addEventListener('click', function(event) {
        loginForm.style.display = 'none'
    })


    // When the user presses the .submit button, 
    //    add an .error class to both input elements
    buttonSubmit.addEventListener('click', function(event) {
        userName.classList.add('error')
        passWord.classList.add('error')
    })

    // When the user puts their cursor in one of the input fields, 
    //    remove the .error class
    buttonSubmit.addEventListener('click', function(event) {
        userName.classList.remove('error')
        passWord.classList.remove('error')
    })



    // (Bonus) Allow the user to click the .modal 
    //    to close itself


    // what happens when two elements that are overlapping 
    // are both waiting for a click
    
    })