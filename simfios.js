var LARGURA,ALTURA,ctx,canvas,larguraBotao,alturaBotao;
 

if (window.innerWidth > 1200){
    LARGURA = 1200
    ALTURA = 600
    larguraBotao = 200
    alturaBotao = 70
}
else{
    LARGURA = innerWidth - 20
    ALTURA = innerHeight - 20
    larguraBotao = 200
    alturaBotao = 70
}

div1 = document.createElement("div")
div1.id = "div1"
div1.style.border = "0px solid #000"
div1.style.width = LARGURA
div1.style.height= ALTURA
document.body.appendChild(div1)

canvas = document.createElement("canvas");
canvas.width = LARGURA;
canvas.height = ALTURA;
canvas.style.border = "0px solid #000";
ctx = canvas.getContext("2d");
div1.appendChild(canvas);

preto15mm = "1,5mm e preto"
azul15mm = "1,5mm e azul"
preto25mm = "2,5mm e preto"
azul25mm = "2,5mm e azul"
verde25mm = "2,5mm e verde"
preto40mm = "4,0mm e preto"
azul40mm = "4,0mm e azul"


if(localStorage.getItem(preto15mm) == null){
localStorage.setItem(preto15mm, 0)
}
if(localStorage.getItem(azul15mm) == null){
    localStorage.setItem(azul15mm, 0)
}
if(localStorage.getItem(preto25mm) == null){
    localStorage.setItem(preto25mm, 0)
}    
if(localStorage.getItem(azul25mm) == null){
    localStorage.setItem(azul25mm, 0)
}    
if(localStorage.getItem(verde25mm) == null){
    localStorage.setItem(verde25mm, 0)
}    
if(localStorage.getItem(preto40mm) == null){
    localStorage.setItem(preto40mm, 0)
}    
if(localStorage.getItem(azul40mm) == null){
    localStorage.setItem(azul40mm, 0)
}    

/*

essas funcoes semvem para redirecionar para outro html

*/



function criarEstoque(){
    window.location.href = "criarEstoque.html"
}
function mostrarEstoque(){
    window.location.href = "mostrarEstoque.html"
}
function caixa(){
    alert("caixa")
}
function fazerVenda(){
    alert("fazer vendas")
}

/*

essas funcoes semvem para redirecionar para outro html

*/




botaoCriarEstoque = document.createElement("button")
botaoCriarEstoque.id = "botaoCriarEstoque"
botaoCriarEstoque.innerText = "Criar Estoque"
botaoCriarEstoque.style.left = LARGURA / 2 - (larguraBotao * 2) 
botaoCriarEstoque.style.top = ALTURA / 2 
botaoCriarEstoque.style.width = larguraBotao
botaoCriarEstoque.style.height = alturaBotao
botaoCriarEstoque.setAttribute('onclick', 'criarEstoque()')
div1.appendChild(botaoCriarEstoque)

botaoMostrarEstoque = document.createElement("button")
botaoMostrarEstoque.id = "botaoMostrarEstoque"
botaoMostrarEstoque.innerText = "Mostrar Estoque"
botaoMostrarEstoque.style.left = LARGURA / 2 - (larguraBotao * 2)
botaoMostrarEstoque.style.top = ALTURA / 2 
botaoMostrarEstoque.style.width = larguraBotao
botaoMostrarEstoque.style.height = alturaBotao
botaoMostrarEstoque.setAttribute('onclick', 'mostrarEstoque()')
div1.appendChild(botaoMostrarEstoque)

botaoCaixa = document.createElement("button")
botaoCaixa.id = "botaoCaixa"
botaoCaixa.innerText = "Mostrar Caixa"
botaoCaixa.style.left = LARGURA / 2 - (larguraBotao * 2)
botaoCaixa.style.top = ALTURA / 2 
botaoCaixa.style.width = larguraBotao
botaoCaixa.style.height = alturaBotao
botaoCaixa.setAttribute('onclick', 'caixa()')
div1.appendChild(botaoCaixa)

botaoFazerVenda = document.createElement("button")
botaoFazerVenda.id = "botaoFazerVenda"
botaoFazerVenda.innerText = "Fazer Venda"
botaoFazerVenda.style.left = LARGURA / 2 - (larguraBotao * 2)
botaoFazerVenda.style.top = ALTURA / 2 
botaoFazerVenda.style.width = larguraBotao
botaoFazerVenda.style.height = alturaBotao
botaoFazerVenda.setAttribute('onclick', 'fazerVenda()')
div1.appendChild(botaoFazerVenda)