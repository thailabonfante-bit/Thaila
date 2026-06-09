// Mensagem de sucesso no envio do formulário
document.getElementById("form-contato").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg-sucesso").textContent = "Obrigado pela sua mensagem! Entraremos em contato em breve.";
    this.reset();
});