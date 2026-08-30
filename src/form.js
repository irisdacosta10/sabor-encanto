let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
console.log('carrinho carregado:', carrinho)

function validar(event) {
event.preventDefault()

const nome = document.getElementById('nome').value.trim()
const sobNome = document.getElementById('sbnome').value.trim()
const municipio = document.getElementById('muni').value.trim()
const tel = document.getElementById('telefone').value.trim()
const telAlt = document.getElementById('telefoneafirm').value.trim()

const mensagem = document.getElementById('msg-sucesso')

const erroNome = document.getElementById('erro-nome')
const erroSobnome = document.getElementById('erro-sbnome')
const erroMuni = document.getElementById('erro-muni')
const erroTel = document.getElementById('erro-tel')
const erroTelalt = document.getElementById('erro-telalt')


const apenasLetras = /^[a-zA-ZÀ-ÿ\s]+$/
const apenasNumeros = /^[0-9]+$/

erroNome.textContent = ""
erroSobnome.textContent = ""
erroMuni.textContent = ""
erroTel.textContent = ""
erroTelalt.textContent = ""

let validacao = true

if (!apenasLetras.test(nome)) {
    erroNome.style.color = "red"
    erroNome.textContent = "Digite apenas letras"
    validacao = false
}

if (!apenasLetras.test(sobNome)) {
    erroSobnome.style.color = "red"
    erroSobnome.textContent = "Digite apenas letras"
    validacao = false 
}

if (!apenasLetras.test(municipio)) {
    erroMuni.style.color = "red"
    erroMuni.textContent = "Digite apenas letras"
    validacao = false  
}

if (!apenasNumeros.test(tel)) {
    erroTel.style.color = "red"
    erroTel.textContent = "Digite apenas números"
    validacao = false 
}

if (!apenasNumeros.test(telAlt)) {
    erroTelalt.style.color = "red"
    erroTelalt.textContent = "Digite apenas números"
    validacao = false  
}

if (validacao) {
    enviarWhatsApp()
    
    
}

}

function limparErro(idErro) {
    document.getElementById(idErro).textContent = ''
    document.getElementById('msg-sucesso').textContent = ''
    
}

function enviarWhatsApp() {

    const nome = document.getElementById('nome').value.trim()
    const sobNome = document.getElementById('sbnome').value.trim()
    const municipio = document.getElementById('muni').value.trim()
    const endereco = document.getElementById('ende').value.trim()
    const referencia = document.getElementById('prefe').value.trim()
    const tel = document.getElementById('telefone').value.trim()
    const telAlt = document.getElementById('telefoneafirm').value.trim()
    

	 let mensagem = `*Novo Pedido Realizado*%0A`
    mensagem += `Nome: ${nome} ${sobNome}%0A`
    mensagem += `Endereço: ${endereco} ${municipio} ${referencia}%0A`
    mensagem += `Telefone: ${tel}%0A`
    if (telAlt) mensagem += `Tel. Alternativo: ${telAlt}%0A`
    mensagem += `%0A*Itens do Pedido:*%0A`
     
    
    
    let total = 0

    carrinho.forEach((item) =>
        {
            const subtotal = item.precoUnitario * item.quantidade
            mensagem += `${item.nome} x${item.quantidade} - ${subtotal.toLocaleString()} Kz%0A`
            total += subtotal
        })

    mensagem += `%0A *Total:* ${total.toLocaleString()} Kz`
    

    

	document.getElementById('finalizar').reset()
    

    if (confirm('Formulário enviado com sucesso!\n\nClique OK para voltar à página inicial.')){
        
        const numeroRestaurante = "244947702458"
        const url = `https://wa.me/${numeroRestaurante}?text=${mensagem}`
    window.open(url, "_blank")
    
    window.location.href = 'index.html'
    }
    
}