window.onload= function(){
	
	//AFASTAR O TITULO DO CABEÇALHO
	var btnMenu = document.getElementById('btn_menu');
	var linhasMenu = btnMenu.querySelectorAll('.linha');
	var contentMenu = document.getElementById('content-menu');
	var menu = contentMenu.querySelector('.menu');
	var cabecalho = document.getElementById('content-logo-btn-menu');
	var altturaCabecalho = cabecalho.offsetHeight;
	var title = document.querySelector('.section-titles');
	var posScrol;
	var textLog = document.getElementById('logo-span');
	
	



title.style.marginTop= altturaCabecalho+60+'px';
menu.style.marginTop = cabecalho.offsetHeight+"px";
//FUNÇÃO BTN VOLTAR PARA O TOPO


var btnTopo = document.querySelector('.volta-topo');
function rolaPagina(){
	var posi;

	btnTopo.addEventListener('click',function(){
		posi = window.scrollY;
		time = 50;
		var interval = setInterval(function(){
			
			if(posi>0){
				posi-=time;
				window.scrollTo(0,posi);
				console.log(posi);
			}else{
				clearInterval(interval);
			}

		},4);
		
	});

}

(function mostrarBotaoTopo(){

	window.addEventListener('scroll',function(){
		var posAtual= window.scrollY;
		if(posAtual> altturaCabecalho + 100){

			btnTopo.style.opacity = 0.5;

		}else{
			btnTopo.style.opacity = 0;
		}

	});

	rolaPagina();
}());

//FUNÇÃO MUDA COR 
function mudaCorBackground(arg,cor){	
	arg.forEach(function(e){
		e.style.backgroundColor = cor;
	});
}
function mudaColor(arg,cor){	
	arg.forEach(function(e){
		e.style.color = cor;
	});
}

//aqui muda a cor do cabeçalho e btn menu

window.addEventListener('scroll',function(){
	posScrol = window.scrollY;

	if (posScrol > altturaCabecalho) {
		mudaCorBackground([cabecalho], '#fff');
		cabecalho.style.borderBottom = "rgba(0,170,255,0.2) 1px solid";
		CorBtnMenu("#333");
		mudaColor([textLog],"#333");
	}else{
		mudaCorBackground([cabecalho], 'initial');
		cabecalho.style.borderBottom = "rgba(255,255,255,.2) 1px solid";
		CorBtnMenu('#fff');
		mudaColor([textLog],"#fff");
	}
});


function openCloseMenu(){
	var body = document.querySelector('body');
	var corCabecalhoAtual = cabecalho.style.backgroundColor;

	contentMenu.classList.toggle('content-menu-toggle');
	menu.classList.toggle('menu-toggle');
	body.classList.toggle('paralisa-body');
	var pos = window.scrollY;
	 //existe um bug quando recarrega a pagina com scroll maior que o tamanho do cabecalho
	 /* 	RESOLVER ESSE BUG DEPOIS
	if(pos<= altturaCabecalho){
		mudaCorBackground([cabecalho], '#fff');
		cabecalho.style.borderBottom = "rgba(0,170,255,0.2) 1px solid";
		mudaColor([textLog],"#333");
		CorBtnMenu('#333');
		if(pos>altturaCabecalho){
			mudaCorBackground([cabecalho], "");
			cabecalho.style.borderBottom = "rgba(255,255,255,.2) 1px solid";
			mudaColor([textLog],"#fff");
			CorBtnMenu('#fff');
		}
	}
	*/

}

function CorBtnMenu(cor){
	mudaCorBackground(linhasMenu,cor);
}


//ANIMAÇÃO BTN MENU	E CONTENT MENU
(function animaBtnMenu(){  //usar '(' no inicio na function e '())' no fechamento do escopo já criar e chama a func.

	btnMenu.addEventListener('click',function(){

		linhasMenu.forEach(function(e,i){

			e.classList.toggle('togglel'+i);

		});

		openCloseMenu();

	});

}());

//configurações do submenus do admn

	(function abrirSubmenu(){

		var btnMenu = document.querySelectorAll('.btn-submenu')


		btnMenu.forEach((e)=>{

			e.addEventListener('click',()=>{

				
				


			})

		})


	

	}())





	//efeito maquina de escrever

	function escreveFrase(elemento){

		const textArray = elemento.innerHTML.split('');
		elemento.innerHTML="";

		textArray.forEach(function(letra,i){

			setTimeout(function(){

				elemento.innerHTML += letra;

			},80 * i);

		});
	}

	const subtitulo = document.getElementById('subtitulo');
	var divSubtitulo = document.getElementById('div-subtitulo');
	divSubtitulo.style.opacity= 1;
	divSubtitulo.style.transform = 'translate3d(0,0,0)';
	escreveFrase(subtitulo);

	//ANIMAÇÕES NA SECTION DE SERVIÇOS
	//usar variavel pos
	(function(){ //serve para encapsular todo esse escopo para não gerar conflitos futuros
	var servicos = document.querySelectorAll('.servico');
	var offset = window.innerHeight * 3 /4;
	console.log(offset);
	function animeScroll(){
		
		var docTop = window.scrollY;
		
		servicos.forEach(function(e){
			var divTitle = e.querySelector('.div-titles');
			var imgZoom = e.querySelector('.div-img img');
			var itemTop = e.offsetTop;
			
			if(docTop > itemTop - offset){
				divTitle.classList.add('div-titles-active');
				imgZoom.classList.add('img-zoom');

			}else{
				divTitle.classList.remove('div-titles-active');
				imgZoom.classList.remove('img-zoom');
			}

		});

	}

	
	animeScroll();

	window.addEventListener('scroll', function(){


		animeScroll();

	});

}());

	//CONFIGURAÇÕES ITENS DOS DETALHE DOS SERVIÇOS

	var titleItens = document.querySelectorAll('.title-habilidade');
	
	titleItens.forEach(function(e,i){

		e.addEventListener('click',function(){

			this.classList.toggle('habilidade-active');
			
			
							  //onextElementSibling pega o proxi. elemento
			var painel = this.nextElementSibling; 
			
			
			if(painel.style.maxHeight){

				painel.style.maxHeight = null;
				this.style.borderRadius = "8px";
			}else{

				var fullPanel = document.querySelectorAll('.contet-img-texto');
				
				fullPanel.forEach(function(e,i){

					var possui = fullPanel[i].style.maxHeight?true:false;

					if(possui){
						fullPanel[i].style.maxHeight = null;
						var titlefechado = fullPanel[i].previousElementSibling;
						titlefechado.style.borderRadius = "8px";
						titlefechado.classList.toggle('habilidade-active');
					}

				});

				painel.style.maxHeight = painel.scrollHeight +'px';

				this.style.borderRadius = "8px 8px 0 0";
			}

		});

	});


	




}