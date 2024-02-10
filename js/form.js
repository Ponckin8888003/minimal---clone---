let form = document.querySelector('.submit_form');

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

let waitingForm = document.querySelector('.waiting_form');
let openFormButtons = document.querySelectorAll('.characteristics_button');
let formBox = document.querySelector('.form_content');

form.onsubmit = function(evt){
    evt.preventDefault();
    nameInput.value = '';
    emailInput.value = '';
};


for (let openButton of openFormButtons) {
    openButton.onclick = function() {
        waitingForm.style.display = 'grid';
        formBox.style.display = 'block';

        document.addEventListener("click", function closeFormBox(e) {
            if (!formBox.contains(e.target) && e.target !== openButton) {
                formBox.style.display = 'none';
                waitingForm.style.display = 'none'; 
                document.removeEventListener("click", closeFormBox); 
            }
        });
    }
}
