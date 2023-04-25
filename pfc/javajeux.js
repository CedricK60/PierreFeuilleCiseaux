const buttons = document.querySelectorAll('button');
function maVie(){
  var maDureeDeVie = document.querySelector('#Player').value;
  var newVal = maDureeDeVie -20;
  document.querySelector('#Player').value = newVal;
}
function saVie(){
  var saDureeDeVie = document.querySelector('#Computer').value;
  var newVal = saDureeDeVie -20;
  document.querySelector('#Computer').value = newVal;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (){
    const player = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML

    console.log(robot);

    if(
    player == 'Pierre' && robot =='Ciseaux' || 
    player == 'Ciseaux' && robot == 'Feuille' ||
    player == 'Feuille' && robot == 'Pierre'){
      //Quand je gagne 
      alert("Bravo tu a gagné !");
      result = saVie();
      winplayer();
    } else if(
    robot == 'Pierre' && player =='Ciseaux' || 
    robot == 'Ciseaux' && player == 'Feuille' ||
    robot == 'Feuille' && player == 'Pierre'){
      //quand je perds
      alert("Mince, tu a perdu !");
      result = maVie();
      winRobot();
    } else if(
    robot == player) {
      // Egalité
      alert("Égalité, rejouer !")
    }
  })
}

function winplayer() {
  var barre1 = document.querySelector('#Computer').value;
  if (barre1 == 0) {
    alert('Félicitation vous avez gagné !')
    document.querySelector('#Computer').value = 100;
    document.querySelector('#Player').value = 100;
  }
}

function winRobot() {
  var barre = document.querySelector('#Player').value;
  if (barre == 0) {
    alert('Dommage vous avez perdu !')
    document.querySelector('#Computer').value = 100;
    document.querySelector('#Player').value = 100;
  }
}