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

div1 = document.getElementById("div1")

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

div2 = document.getElementById("div2")

div2.style.border = "1px solid #000"

div2.style.width = 300
div2.style.height= 500
div2.style.top = 70
div2.style.left = 350
div1.appendChild(div2)


function paginaInicial(){
    window.location.href = "simfios.html"
}
/*
textos de colunas de descrição e quantidade 
*/
 
textoDescricao = document.createElement("input")

textoDescricao.style.width = 140
textoDescricao.style.height = 40
textoDescricao.setAttribute('type', 'submit')
textoDescricao.setAttribute('value', 'Descrição')
div2.appendChild(textoDescricao)

textoQuantidade = document.createElement("input")

textoQuantidade.style.width = 140
textoQuantidade.style.height = 40
textoQuantidade.setAttribute('type', 'submit')
textoQuantidade.setAttribute('value', 'Quantidade')
div2.appendChild(textoQuantidade)

/*
textos de colunas de descrição e quantidade 
*/



textoPreto15mm = document.createElement("input")

textoPreto15mm.style.width = 140
textoPreto15mm.style.height = 40
textoPreto15mm.setAttribute('type', 'submit')
textoPreto15mm.setAttribute('value', 'Fio Preto de 1,5mm:')
div2.appendChild(textoPreto15mm)



qtdPreto15mm = document.createElement("input")

qtdPreto15mm.style.width = 140
qtdPreto15mm.style.height = 40
qtdPreto15mm.setAttribute('type', 'button')
qtdPreto15mm.setAttribute('value', localStorage.getItem('1,5mm e preto'))
div2.appendChild(qtdPreto15mm)



textoazul15mm  = document.createElement("input")

textoazul15mm .style.width = 140
textoazul15mm .style.height = 40
textoazul15mm .setAttribute('type', 'submit')
textoazul15mm .setAttribute('value', 'Fio Azul de 1,5mm:')
div2.appendChild(textoazul15mm )




qtdAzul15mm = document.createElement("input")

qtdAzul15mm.style.width = 140
qtdAzul15mm.style.height = 40
qtdAzul15mm.setAttribute('type', 'button')
qtdAzul15mm.setAttribute('value', localStorage.getItem('1,5mm e azul'))
div2.appendChild(qtdAzul15mm)



textoPreto25mm  = document.createElement("input")

textoPreto25mm.style.width = 140
textoPreto25mm.style.height = 40
textoPreto25mm.setAttribute('type', 'submit')
textoPreto25mm.setAttribute('value', 'Fio Preto de 2,5mm:')
div2.appendChild(textoPreto25mm)




qtdPreto25mm = document.createElement("input")

qtdPreto25mm.style.width = 140
qtdPreto25mm.style.height = 40
qtdPreto25mm.setAttribute('type', 'button')
qtdPreto25mm.setAttribute('value', localStorage.getItem('2,5mm e preto'))
div2.appendChild(qtdPreto25mm)



textoAzul25mm  = document.createElement("input")

textoAzul25mm.style.width = 140
textoAzul25mm.style.height = 40
textoAzul25mm.setAttribute('type', 'submit')
textoAzul25mm.setAttribute('value', 'Fio Azul de 2,5mm:')
div2.appendChild(textoAzul25mm)




qtdAzul25mm = document.createElement("input")

qtdAzul25mm.style.width = 140
qtdAzul25mm.style.height = 40
qtdAzul25mm.setAttribute('type', 'button')
qtdAzul25mm.setAttribute('value', localStorage.getItem('2,5mm e azul'))
div2.appendChild(qtdAzul25mm)



textoVerde25mm  = document.createElement("input")

textoVerde25mm.style.width = 140
textoVerde25mm.style.height = 40
textoVerde25mm.setAttribute('type', 'submit')
textoVerde25mm.setAttribute('value', 'Fio Verde de 2,5mm:')
div2.appendChild(textoVerde25mm)




qtdVerde25mm = document.createElement("input")

qtdVerde25mm.style.width = 140
qtdVerde25mm.style.height = 40
qtdVerde25mm.setAttribute('type', 'button')
qtdVerde25mm.setAttribute('value', localStorage.getItem('2,5mm e verde'))
div2.appendChild(qtdVerde25mm)



textoPreto40mm  = document.createElement("input")

textoPreto40mm.style.width = 140
textoPreto40mm.style.height = 40
textoPreto40mm.setAttribute('type', 'submit')
textoPreto40mm.setAttribute('value', 'Fio Preto de 4,0mm:')
div2.appendChild(textoPreto40mm)



qtdPreto40mm = document.createElement("input")

qtdPreto40mm.style.width = 140
qtdPreto40mm.style.height = 40
qtdPreto40mm.setAttribute('type', 'button')
qtdPreto40mm.setAttribute('value', localStorage.getItem('4,0mm e preto'))
div2.appendChild(qtdPreto40mm)



textoAzul40mm  = document.createElement("input")

textoAzul40mm.style.width = 140
textoAzul40mm.style.height = 40
textoAzul40mm.setAttribute('type', 'submit')
textoAzul40mm.setAttribute('value', 'Fio Azul de 4,0mm:')
div2.appendChild(textoAzul40mm)




qtdAzul40mm = document.createElement("input")

qtdAzul40mm.style.width = 140
qtdAzul40mm.style.height = 40
qtdAzul40mm.setAttribute('type', 'button')
qtdAzul40mm.setAttribute('value', localStorage.getItem('4,0mm e azul'))
div2.appendChild(qtdAzul40mm)


//alert(valorProvisorio1)
/*
preto15mm = "1,5mm e preto"
azul15mm = "1,5mm e azul"
preto25mm = "2,5mm e preto"
Azul25mm = "2,5mm e azul"
Verde25mm = "2,5mm e verde"
Preto40mm = "4,0mm e preto"
Azul40mm = "4,0mm e azul"*/