document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCompra");

    // Função para validar a quantidade
    function validateQuantity() {
        const quantidade = document.getElementById("quantidade").value;
        const quantidadeError = document.getElementById("quantidadeError");
        
        if (quantidade <= 0) {
            quantidadeError.style.display = "block";
            Toastify({
                text: "Por favor, insira um valor maior que 0.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
            return false;
        } else {
            quantidadeError.style.display = "none";
            return true;
        }
    }

    // Função para validar o nome
    function validateName() {
        const nomeCompleto = document.getElementById("nomeCompleto").value;
        const nomeError = document.getElementById("nomeError");
        
        if (!/^[A-Z]/.test(nomeCompleto)) {
            nomeError.style.display = "block";
            Toastify({
                text: "O nome deve começar com uma letra maiúscula.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
            return false;
        } else {
            nomeError.style.display = "none";
            return true;
        }
    }

    // Função para validar o e-mail
    function validateEmail() {
        const email = document.getElementById("email").value;
        const emailError = document.getElementById("emailError");
        
        if (!validator.isEmail(`${email}@gmail.com`)) {
            emailError.style.display = "block";
            Toastify({
                text: "Insira apenas o prefixo do e-mail sem '@gmail.com'.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }

    // Função para validar a senha
    function validatePassword() {
        const senha = document.getElementById("senha").value;
        const senhaError = document.getElementById("senhaError");
        
        const senhaValida = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        
        if (!senhaValida.test(senha)) {
            senhaError.style.display = "block";
            Toastify({
                text: "A senha deve ter 6+ caracteres, incluindo 1 número e 1 especial.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
            return false;
        } else {
            senhaError.style.display = "none";
            return true;
        }
    }

    // Função para validar a data de nascimento
    function validateDate() {
        const dataNascimento = document.getElementById("dataNascimento").value;
        const dataError = document.getElementById("dataError");
        
        const dataValida = /^\d{2}\/\d{2}\/\d{4}$/; // Formato DD/MM/AAAA
        
        if (!dataValida.test(dataNascimento)) {
            dataError.style.display = "block";
            Toastify({
                text: "Formato inválido. Use DD/MM/AAAA.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
            return false;
        } else {
            dataError.style.display = "none";
            return true;
        }
    }

    // Adicionando os eventos de validação nos campos
    document.getElementById("quantidade").addEventListener("input", validateQuantity);
    document.getElementById("nomeCompleto").addEventListener("input", validateName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("senha").addEventListener("input", validatePassword);
    document.getElementById("dataNascimento").addEventListener("input", validateDate);

    // Adicionando o evento de submit para validar tudo antes de enviar
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio do formulário

        const isQuantityValid = validateQuantity();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isDateValid = validateDate();

        // Se todos os campos forem válidos, exibir notificação de sucesso e redirecionar
        if (isQuantityValid && isNameValid && isEmailValid && isPasswordValid && isDateValid) {
            Toastify({
                text: "Pedido enviado com sucesso!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "green"
            }).showToast();

            // Redireciona após um pequeno intervalo para garantir que o Toast seja exibido
            setTimeout(() => {
                window.location.href = "form-inline-confirma.html";
            }, 3000);
        }
    });
});
