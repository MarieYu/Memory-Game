
//création d'un jeu mémo en JQuery

$(function(){

	//tableau d'images:
	/*var tabImg = [
		"file:///H:/img/Memo/andromede.jpg",
		"file:///H:/img/Memo/cateye.jpg",
		"file:///H:/img/Memo/crabe.jpg",
		"file:///H:/img/Memo/eagle.jpg",
		"file:///H:/img/Memo/esquimeau.jpg",
		"file:///H:/img/Memo/helix.jpg",
		"file:///H:/img/Memo/orion.jpg",
		"file:///H:/img/Memo/trifide.jpg"
	];*/

	var tabImg = [
		"file:///E:/img/Memo/andromede.jpg",
		"file:///E:/img/Memo/cateye.jpg",
		"file:///E:/img/Memo/crabe.jpg",
		"file:///E:/img/Memo/eagle.jpg",
		"file:///E:/img/Memo/esquimeau.jpg",
		"file:///E:/img/Memo/helix.jpg",
		"file:///E:/img/Memo/orion.jpg",
		"file:///E:/img/Memo/trifide.jpg"
	];

	//var nbRand; //pour stocker nb aléatoire d'index du tableau images
	var nbImg = tabImg.length;//nb d'images soit taille du tableau d'images

	function randImg(nbImg){
		var indList = []; // tableau vide pour stocker les index des images en 2 exemplaires
		for(var ii=0; ii<nbImg*2; ii++){
			indList[ii] = ii%nbImg; 
		}
		console.log(indList);

		var indRand = []; //tableau vide pour stocker les index des images en 2 exemplaires de façon aléatoire
		for(var ii=0, t=indList.length; ii<t; ii++){ //t=taille tableau indList à chaque boucle
																					//(car on suppr un indice à chaque boucle qd indice choisi)
			var nbRand = Math.floor(Math.random()*indList.length);
			indRand[ii] = indList[nbRand];
			indList.splice(nbRand, 1);//supprime 1 élément à partir de l'index qui est défini par nbRand
		}
		console.log(indRand);
		return indRand;
		
	}

	//création des éléments dans le DOM

	var randGame = randImg(nbImg); //fonction randImg
	for(var ii=0; ii<randGame.length; ii++){
		var span = $('<span>');
		var img = $('<img>');

		img.attr('src',tabImg[randGame[ii]]);
		console.log(randGame[ii]);
		
		$('body').append(span);
		span.append(img);
	}




// faire création des éléments et leurs événements associés après:
/*	$.each(tabImg, function (index, value){ //parcourt le tab d'img
			nbRand = Math.floor(Math.random()*tabImg.length); //calcul du nb aléatoire d'index du tableau images

			var span = $('<span>');
			var img = $('<img>');

			span.attr('id', index);
			img.attr('id', nbRand);
			
			img.attr('src',tabImg[nbRand]);

			$('body').append(span);
			span.append(img);
	
	});*/
	






});