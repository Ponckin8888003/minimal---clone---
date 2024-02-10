let form = document.querySelector('.submit_form');

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

let waitingForm = document.querySelector('.waiting_form');
let openFormButtons = document.querySelectorAll('.characteristics_button');

form.onsubmit = function(evt){
    evt.preventDefault();
    nameInput.value = '';
    emailInput.value = '';
};


for (let openButton of openFormButtons) {
    openButton.onclick = function() {
        waitingForm.style.display = 'grid';
    }
}


