let btnConfirmar = document.getElementById('btn-enviar');

btnConfirmar.addEventListener('click', () => verifyEmptyInputs());

function verifyEmptyInputs() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let textMessage = document.getElementById('text-message');

    if (name.value == "") {
        name.classList.remove('border-green');
        name.classList.add('border-red');
        showErrorMessage(name);
    } else{
        name.classList.remove('border-red');
        name.classList.add('border-green');
        removeErrorMessage(name);
    }

    if (email.value == "") {
        email.classList.remove('border-green');
        email.classList.add('border-red');
        showErrorMessage(email);
    } else{
        email.classList.remove('border-red');
        email.classList.add('border-green');
        removeErrorMessage(email);
    }

    if (phone.value == "") {
        phone.classList.remove('border-green');
        phone.classList.add('border-red');
        showErrorMessage(phone);
    } else{
        phone.classList.remove('border-red');
        phone.classList.add('border-green');
        removeErrorMessage(phone);
    }

    if (textMessage.value == "") {
        textMessage.classList.remove('border-green');
        textMessage.classList.add('border-red');
        showErrorMessage(textMessage);
    } else{
        textMessage.classList.remove('border-red');
        textMessage.classList.add('border-green');
        removeErrorMessage(textMessage);
    }
    
}

function showErrorMessage(inputElement, message="Não pode ser vazio") {
  const erroElement = document.createElement('span');
  erroElement.classList.add('text-error-input');
  erroElement.textContent = message;

  inputElement.parentNode.appendChild(erroElement);
}

function removeErrorMessage(inputElement) {
  const erroElement = inputElement.parentNode.querySelector('.text-error-input');
  if (erroElement) {
    erroElement.remove();
  }
}