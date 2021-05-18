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

div1 = document.getElementById("divItem")

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




function incluirItem(){
    bitola = document.getElementById('bitola')
    corDoFio = document.getElementById('corDoFio')
    bitola1 = bitola.options[bitola.selectedIndex].value
    corDoFio1 = corDoFio.options[corDoFio.selectedIndex].value
    
    qtd = parseInt(document.getElementById('quantidade').value)
    
if (bitola1 == "1,5mm²" && corDoFio1 == "Preto" && qtd > 0){
    qtdPreto15 = parseInt(localStorage.getItem(preto15mm))
    localStorage.setItem(preto15mm, qtd + qtdPreto15 )
}
if (bitola1 == "1,5mm²" && corDoFio1 == "Azul" && qtd > 0){
    qtdAzul15mm = parseInt(localStorage.getItem(azul15mm))
    localStorage.setItem(azul15mm, qtd + qtdAzul15mm)
}
if (bitola1 == "1,5mm²" && corDoFio1 == "Verde" && qtd > 0){
    alert("Erro, reveja cores e bitola")
}
if (bitola1 == "2,5mm²" && corDoFio1 == "Preto" && qtd > 0){
    qtdPreto25mm = parseInt(localStorage.getItem(preto25mm))
    localStorage.setItem(preto25mm, qtd + qtdPreto25mm)
}
if (bitola1 == "2,5mm²" && corDoFio1 == "Azul" && qtd > 0){
    qtdAzul25mm = parseInt(localStorage.getItem(azul25mm))    
    localStorage.setItem(azul25mm, qtd + qtdAzul25mm)
}
if (bitola1 == "2,5mm²" && corDoFio1 == "Verde" && qtd > 0){
    qtdVerde25mm = parseInt(localStorage.getItem(verde25mm)) 
    localStorage.setItem(verde25mm, qtd + qtdVerde25mm)
}
if (bitola1 == "4,0mm²" && corDoFio1 == "Preto" && qtd > 0){
    qtdPreto40mm = parseInt(localStorage.getItem(preto40mm)) 
    localStorage.setItem(preto40mm, qtd + qtdPreto40mm)
}
if (bitola1 == "4,0mm²" && corDoFio1 == "Azul" && qtd > 0){
    qtdAzul40mm = parseInt(localStorage.getItem(azul40mm)) 
    localStorage.setItem(azul40mm, qtd + qtdAzul40mm)
}
if (bitola1 == "4,0mm²" && corDoFio1 == "Verde"){
    alert("Erro, reveja cores e bitola")
}
}

function paginaInicial(){
    window.location.href = "simfios.html"
}

