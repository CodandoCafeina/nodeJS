/* Seletores e metodo de encadeamento */

$(document).ready(function(){
	$('a').css('color', '#0f0')
	.on('click', ()=>{
		$('#texto')
			.html('Metodo de encadiamento')
			.css('color', '#a00')
	});
});

/* 	$("")

	"#texto" seleciona por ID, 
	".texto" eleciona por CLASS, 
	"div" seleciona por TAG,
	":input" seleciona todos os INPUTs
	":button" INPUT do tipo BUTTON
	"div, a" seleciona dois ou mais elementos
	"div span" seleciona por DESCENDENCIA seleciona o span
	"li > ul" elemento FILHO de li seleciona o ul
	"#first + a" primerio IRMÃO "#first ~ a" seleciona TODOS os IRMÃOS
	"a:first" PRIMEIRO elemento
	"a:last" ULTIMO elemento
	"a:not(a:last)" seleciona todos MENOS o ultimo
	"a:even" seleciona todos na POSIÇÃO PAR 0,2,4...
	"a:odd" seleciona todos na POSIÇÃO IMPAR 1,3,5...
	"a:eq(1)" elemento na POSIÇÃO 1
	"a:gt(1)" elementos MAIORES que 1
	"a:lt(1)" elementos MENORES que 1
	"a:contains(ola 1)" elemento que contem TEXT ola 1
	"a:empty" elemento com TEXTO VASIO
	"a:has(strong)" elemento que CONTEM tag strong
	"a[name=menu]" elemento que contenha ATRIBUTO name com valor menu
	"a[name!=menu]" ATRIBUTO name que não tenha menu  
	"a[name|=menu]" todos que COMEÇE com menu
	"a[name$=js]" todos que TERMINE com js

*/

/* Manipulação de atributos
	
	$('#img').attr({ metodo de encadeamento passando chave valor
		src: "novo/novaImagem.jpg",
		title: "novo titulo da imagem"
	});

	$('#img').removeAttr("src"); REMOVE o ATRIBUTO src do elemento

	$('#img').addClass('destaque'); ADICIONA a CLASS destaque ao elemento
	$('#img').hasClass('destaque'); verifica se EXISTE a CLASS no elemento

	$('#img').toggleClass('destaque'); ALTERNADOR se existe a class remova, senão adicione 

*/