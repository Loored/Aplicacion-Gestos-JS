var app={
	inicio: function(){
		this.iniciaBotones();
		this.iniciaFastClick();
		this.iniciaHammer();
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaBotones: function(){
		var botonclaro = document.querySelector('#claro');
		var botonoscuro = document.querySelector('#oscuro');

		botonclaro.addEventListener('click', this.getLight, false);
		botonoscuro.addEventListener('click', this.getBlack, false);
	},
	
	iniciaHammer: function(){
		var zona = document.getElementById('zona-gestos');
		var hammertime = new.Hammer(zona);

		hammertime.get('pinch');.set({enable:true});
		hammertime.get('rotate');.set({enable:true});

		hammertime.on('tap doubletap pan swipe press pinch rotate', functio(ev){
			document.querySelector('#info').innerHTML = ev.type+'!';
		});
	},
	{
		var botonclaro = document.querySelector('#claro');
		var botonoscuro = document.querySelector('#oscuro');
		botonclaro.addEventListener('click', this.getBlack, false);
		botonoscuro.addEventListener('click', this.getLight, false);
	},

	getLight: function(){
		document.body.className = 'claro';
	},

	getBlack: function(){
		document.body.className = 'oscuro';
	},
};

if('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		FastClick.attach(document.body);
		app.inicio();
	}, false); 
}
