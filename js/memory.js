
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

	var nbImg = tabImg.length;//nb d'images soit taille du tableau d'images
	var nbClic = 0;//nb de clic sur un span pour afficher l'image
	var showImg = []; //pour stocker les 2 index du couple d'images retournées
	//var idTimeout;


	function randImg(nbImg){
		var indList = []; // tableau vide pour stocker les index des images en 2 exemplaires
		for(var ii=0; ii<nbImg*2; ii++){
			indList[ii] = ii%nbImg; 
		}
		console.log(indList);

		var indRand = []; //tableau vide pour stocker les index des images en 2 exemplaires de façon aléatoire
		for(var ii=0, t=indList.length; ii<t; ii++){ //t=taille tableau indList à chaque boucle
																					//(car on suppr un indice à chaque boucle qd indice choisi)
			var nbRand = Math.floor(Math.random()*indList.length);//pour stocker nb aléatoire d'index du tableau images
			indRand[ii] = indList[nbRand];
			indList.splice(nbRand, 1);//supprime 1 élément à partir de l'index qui est défini par nbRand
		}
		console.log(indRand);
		return indRand;	
	}

	//création des éléments dans le DOM (affichage aléatoire des images grâce à la 
		//fonction randImg)

	var randGame = randImg(nbImg); //fonction randImg
	for(var ii=0; ii<randGame.length; ii++){
		var span = $('<span>');
		var img = $('<img>');

		img.attr('src',tabImg[randGame[ii]]).hide();//ajoute la src correspondant à l'index généré dans le 
																				//tableau d'index aléatoires
		console.log(randGame[ii]);
		img.attr('alt', randGame[ii]);
		
		$('body').append(span);
		span.append(img);	
	}


	//Afficher l'image quand clic sur un span
	$('span').on('click', function(e){
		$(this).children().show();//sur clic, affiche l'image
		$(this).attr('class', 'showImg');

		nbClic++;
		var img = $(this).children().attr('alt');//récup de l'indice mis dans alt
		console.log(nbClic);
		
		showImg.push(img);//renseigne le n°index de l'image dans le tableau showImg
		console.log(showImg);

		if (nbClic === 2){
			nbClic = 0;
			if(showImg[0]===showImg[1]){
		
				$('span.showImg').attr('class','found');//modifie la classe showImg à found
				console.log('find it');
			}
			else{
				setTimeout(function(){ //seul le 1er couple d'images non apparentées est caché après 2.5sec
					$('span.showImg').children().hide();
					$('span.showImg').removeClass();
					}, 2500);

				//clearTimeout(idTimeout);
				
				/*$(this).children().hide();
				$(this).children().prev().hide();*/
				
				console.log('failed');
			}
			//clearTimeout(idTimeout); 
			showImg = [];
			nbClic=0;
		}
	}); 


//$(this).children().alt





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