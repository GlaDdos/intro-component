const form = document.getElementsByTagName('form')[0];
const inputs = document.getElementsByTagName('input');

//before sending form check errors, prevent sending display errors
form.addEventListener('submit', function (event) {
    
    for(let i = 0; i < inputs.length; i++) {
        if(!inputs[i].validity.valid){
            let errorNodes = inputs[i].closest('.input-group').querySelectorAll('span.error');
            inputs[i].classList.add('invalid');
            for(let j = 0; j < errorNodes.length;  j++) {
                errorNodes[j].classList.add('show');
            }
        }
    }

    event.preventDefault();
});

//for all inputs, attach event listener, check if validates during input
for(let  i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function (event) {
        if(this.validity.valid){
            let errorNodes = this.closest('.input-group').querySelectorAll('span.error');
            this.classList.remove('invalid');
            for(let j = 0; j < errorNodes.length;  j++) {
                errorNodes[j].classList.remove('show');
            }
        }
    })
}
