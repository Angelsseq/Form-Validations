document.getElementById("formCompra").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // Validação da Quantidade
    const quantidade = document.getElementById("quantidade");
    const quantidadeError = document.getElementById("quantidadeError");
    if (quantidade.value <= 0) {
        quantidadeError.style.display = "block";
        isValid = false;
    } else {
        quantidadeError.style.display = "none";
    }

    // Validação do Nome Completo
    const nomeCompleto = document.getElementById("nomeCompleto");
    const nomeError = document.getElementById("nomeError");
    const nomePattern = /^[A-ZÀ-Ý][a-zà-ÿ]+$/;
    if (!nomePattern.test(nomeCompleto.value)) {
        nomeError.style.display = "block";
        isValid = false;
    } else {
        nomeError.style.display = "none";
    }

    // Validação do E-mail
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validação da Senha
    const senha = document.getElementById("senha");
    const senhaError = document.getElementById("senhaError");
    const senhaPattern = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!senhaPattern.test(senha.value)) {
        senhaError.style.display = "block";
        isValid = false;
    } else {
        senhaError.style.display = "none";
    }

    // Validação da Data de Nascimento
    const dataNascimento = document.getElementById("dataNascimento");
    const dataError = document.getElementById("dataError");
    const dataPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dataPattern.test(dataNascimento.value)) {
        dataError.style.display = "block";
        isValid = false;
    } else {
        dataError.style.display = "none";
    }

    // Envio do Formulário
    if (isValid) {
        alert("Formulário enviado com sucesso!");
        event.target.submit();
    }
});
