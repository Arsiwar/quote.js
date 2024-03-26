let mylist = [
    'La plus grande gloire dans la vie ne réside pas à ne jamais tomber, mais à se relever chaque fois que nous tombons',
    'Peu importe à quelle vitesse vous avancez tant que vous ne vous arrêtez pas',
    'Lorsque vous avez un rêve, vous devez le saisir et ne jamais le lâcher',
    'Notre plus grande faiblesse réside dans le fait dabandonner. Le moyen le plus sûr de réussir consiste toujours à essayer une fois de plus',
    'Vous êtes plus capable que vous ne le croyez',
    'On ne naît pas courageux, on le devient',
] 


let index= Math.floor(Math.random()*5);
console.log(index);
let myPara=document.getElementById('identifiant');
myPara.innerText=mylist[index];