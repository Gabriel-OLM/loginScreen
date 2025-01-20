document.getElementById('loginBtn').addEventListener('click', () => {
//Busca dos dados no HTML
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('error-message');
    const successDiv =document.getElementById('success-message')

// Limpeza dos campos
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none"

// Verificação dos campos
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailPattern.test(email)){
        resultDiv.style.display = "block"
        resultDiv.innerHTML = "Insira um email válido"
        return;
    }else if(!password || password.length < 6 ){
        resultDiv.style.display = "block"
        resultDiv.innerHTML = "A senha deve ter pelo menos 6 caracteres."
        return;
    }

//Simulação de autenticação
    successDiv.style.display = "block";
    successDiv.innerHTML = "Login efetuado com sucesso!"

    setTimeout(function(){
        window.location.reload();
     }, 2000);
});