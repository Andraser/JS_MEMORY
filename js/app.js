//global variable
let carte = ['img/1.jpg','img/1.jpg','img/2.jpg','img/2.jpg','img/3.jpg',
'img/3.jpg', 'img/4.jpg', 'img/4.jpg' ,'img/5.jpg' ,'img/5.jpg'
,'img/6.jpg' ,'img/6.jpg' , 'img/7.jpg', 'img/7.jpg'];
let arr = carte;
let card = [];
shuffle(arr);

// mélange des cartes
function shuffle(arr) {

  return arr.sort(() => Math.random() - 0.2);
}
console.log(shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5 , 5 , 6 , 6 , 7 , 7]))

// recupere les images et affiche les images

let recupImg = document.querySelectorAll('img');
for (let i = 0; i < carte.length; i++){
	recupImg[i].addEventListener('click' , function(e){
		e.currentTarget.setAttribute("src", carte[i]);})
}

//comparaison quand les cartes sont flip
if (carte.length === 2){
  (carte[0] === carte[1])
} else {
                                                                              
}
