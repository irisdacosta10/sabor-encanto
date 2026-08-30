/* Campo para declaração de variáveis e constantes */

var carrinho = []
var modal = document.getElementById('modal2')
var contador = document.getElementById('bolinha')
var botao = document.getElementById('carrinho')
var modal3 = document.getElementById('modal3')
var lista = document.getElementById('listaCarrinho')


/* Estilização do Modal */
modal.style.top ='50%'
modal.style.left ='50%'
modal.style.transform ='translate(-50%, -50%)'
modal.style.border ='none'
modal.style.width ='87%'
modal.style.position='relative'

modal3.style.top ='50%'
modal3.style.left ='50%'
modal3.style.transform ='translate(-50%, -50%)'
modal3.style.border ='none'
modal3.style.width ='87%'
modal3.style.position='relative'

/* Função pôr em destaque o card selecionado*/
function selecionar(imagem, nome, preco) {
	document.getElementById('imagem-prato').src = imagem
	document.getElementById('nome').innerText = nome
	document.getElementById('preco').innerText = preco
	document.getElementById('prato-selecionado').style.display ='flex'
	document.getElementsByClassName('conteudo')[0].style.display = 'flex'
	document.getElementById('prato-selecionado').scrollIntoView({behavior:'smooth'})
}

/* Função para abrir Modal */
function abrirModal(){
	modal.showModal()
	document.body.classList.add("barra")
}

/* Função para fechar Modal */
function fecharModal() {
	modal.close()
	modal3.close()
	document.body.classList.remove("barra")

}

function adicionarAoCarrinho(event, nome, preco, imagemSrc) {
	event.stopPropagation()

	const precoEmNumero = parseFloat(preco.replace(/[^\d]/g, ''))

	carrinho.push({nome,
		precoUnitario: precoEmNumero,
		imagem: imagemSrc,
		quantidade: 1
	})
	contador.textContent = carrinho.length
	botao.style.display = 'flex'
}


function clicar() {
	atualizarCarrinho()
	modal3.showModal()
	document.body.classList.add("barra")

}

function atualizarCarrinho() {
	document.getElementsByClassName('lista-container')[0].style.display = 'flex'
	const itens = document.getElementById('item0')
	itens.innerHTML = ''

	carrinho.forEach((item, index) => {
		itens.innerHTML += `
		
		<div class="item" id="item${index}">
            <input type="text" id="nome-prato${index}" value="${item.nome}" disabled>
            <span id="preco${index}">${(item.precoUnitario * item.quantidade).toLocaleString()} Kz</span>
            <button class="remove-btn" onclick="remover(${index})">x</button>

            <div class="quantidade">
                <input id="quantidade${index}" type="number" value="${item.quantidade}" min="1" disabled>
                <button onclick="aumentar(${index})">+</button>
                <button onclick="diminuir(${index})">-</button>
            </div>
        </div>
		` 
	})

	atualizarTotal()

	
}


function aumentar(index){
	carrinho[index].quantidade++

	document.getElementById(`quantidade${index}`).value = carrinho[index].quantidade

	const precoAtual = carrinho[index].precoUnitario * carrinho[index].quantidade

	document.getElementById(`preco${index}`).textContent = `${precoAtual.toLocaleString()} Kz`

	atualizarTotal()
}

function diminuir(index){
	if (carrinho[index].quantidade > 1) {
		carrinho[index].quantidade--
		document.getElementById(`quantidade${index}`).value = carrinho[index].quantidade

		const precoAtual = carrinho[index].precoUnitario * carrinho[index].quantidade

	document.getElementById(`preco${index}`).textContent = `${precoAtual.toLocaleString()} Kz`

	atualizarTotal()

	}
	}


function remover(index){

	const confimar = confirm('Deseja realmente remover esse item do carrinho?')
	if (confimar){
		carrinho.splice(index, 1)
		contador.textContent = carrinho.length
		atualizarCarrinho()
}
}

function atualizarTotal() {

	let total = 0

	carrinho.forEach((item) => {
		total += item.precoUnitario * item.quantidade;
	})
	
	document.getElementById('total').textContent = `Total: ${total.toLocaleString()} Kz`


}

function salvarCarrinho() {
	localStorage.setItem('carrinho', JSON.stringify(carrinho))
	window.location.href = 'form.html'
}