function alterarNome () {
    nome.classList.remove('is-invalid');    
    
    if (nome.value.length > 2) {
        nome.classList.add('is-valid');    
    } else {
        nome.classList.add('is-valid');    
    }
}

function alterarEmail () {
    email.classList.remove('is-invalid');  

    if (email.value.length > 2) {
        email.classList.add('is-valid');    
    }
}

function alterarTelefone () {
    telefone.classList.remove('is-invalid'); 

    if (telefone.value.length > 2) {
        telefone.classList.add('is-valid');    
    }
}

function alterarCidade () {
    cidade.classList.remove('is-invalid');  

    if (cidade.value.length > 2) {
        cidade.classList.add('is-valid');    
    }
}


function validar () {
    event.preventDefault();

    if (document.getElementById ('nome').value === '') {
        nome.classList.add('is-invalid');        
    }

    if (document.getElementById ('email').value === '') {
        email.classList.add('is-invalid');
    }

    if (document.getElementById ('telefone').value === '') {
        telefone.classList.add('is-invalid');
    }

    if (document.getElementById ('cidade').value === '') {
        cidade.classList.add('is-invalid');
    }





}