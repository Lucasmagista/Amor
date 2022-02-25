const insults = [
    "Amor da minha vida",
    'Minha princesinha Maravilhosa',
    'Minha felicidade',
    'Meu Girassol🌻',
    "Minha nenem",
    "A mulher da minha vida",
    'Nao consigo viver sem vc',
    "Voce é o meu mundo",
    'MInha vida',
    "Minha futura esposa",
    'meu dragão',
    "Minha pequena",
    "Minha mulher",
    "Minha dengosa",
    "sempre sinto a sua falta",
    "amo muito voce",
    "Voce é uma mulher maravilhosa",
    "Gata demais meu amor",
    "Perfeita demais sempre",
    "eu amo voce meu amor",
  ];
  
  const insultMe = () => {
    const h1 = document.getElementsByTagName("H1")[0];
    h1.innerHTML = insults[generateRandomNumber(0, insults.length - 1)];
  };
  
  // HELPER FUNCTIONS
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  document.onload = insultMe();
  document.getElementsByTagName("button")[0].onclick = function () {
    insultMe();
  };
  document.getElementsByTagName("h1")[0].onclick = function () {
    insultMe();
  };
  document.getElementById("heart").onclick = function () {
    insultMe();
  };