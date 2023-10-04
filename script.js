let facts = ['Nigeria is referred as the Giant of Africa due to its population and economy.', 
'The Federal Republic of Nigeria is the official name of Nigeria.', 
'Nigeria is a country located in West Africa.', 
'The total population of Nigeria is around 188,462,640 people.'
'Nigeria is the 7th most populous country in the world.', 
'It is the 32nd largest country with 356,669 square miles.',
'Nigeria shares its border with Benin, Chad, Cameroon, and Niger.', 
'The capital city of Nigeria is Abuja.', 
'The official currency of Nigeria is the Naira.', 
'The largest city in Nigeria is Lagos.', 
'Chappal Waddi is the highest mountain in Nigeria.', 
'The official language of Nigeria is English.', 
' Nigeria is a member of both the African Union and the British Commonwealth.', 
'In Nigeria, the left hand is only used for doing things that are considered dirty.', 
'Abuja is a planned city, and was built mainly in the 1980s.', 
'The movie industry of Nigeria is known as “Nollywood”.', 
'Professor Wole Soyinka is the first Nigerian Nobel Laureate.', 
'Africa’s oldest boat and the third oldest boat in the world was discovered in Yobe, Nigeria.',
'Nigeria wins the Olympic gold at the 1992 Olympics in Atlanta.',
'The drill monkey is native to Nigeria.',
'The Jos Plateau Indigobird is a bird species that can only be found in Nigeria.',
'Folorunso Alakija is one of the richest African women, and one of the richest black women in the world.',
'The National Flag of Nigeria was designed by Michael Taiwo Akinkunmi in 1959.',
'Nigeria’s Yoruba tribe has the highest number of twin births in the world.',
'Nigeria has more Muslims than in Saudi Arabia.',
'Nigeria is home to the single largest monument in Africa.'];

const animalFacts = [];

let newFact = () => {
  
  const generateFact = () => facts.splice(Math.floor(Math.random()*facts.length),1);

  let selectedCard = generateFact();
  animalFacts.push(...selectedCard); //or hand.push(selectedCard[0])
  
  for (let i = 0; i < animalFacts.length; i++) {
    
      if (facts.length == 0) {
        var x = document.getElementById("newFactBtn");
        var copy = document.getElementById("copyText");
        document.getElementById('factDisplay').innerHTML = 'Oops no more facts left! Do you want to Play Again?<br/><button type="button" class ="generateBtn" onClick="window.location.reload()">Lets Play Again!</button>';
        x.style.display = "none";
        copy.style.display = "none";
      } else {
        document.getElementById('factDisplay').innerHTML = animalFacts[i];
        console.log(animalFacts);
      }
  }
  

};

// Create copy button
const copyBtn = document.getElementById('copyText');

// Copy the fact
const copiedFact = document.getElementById('copied');

copyBtn.addEventListener('click', copyFact);

async function copyFact () {
  const fact = document.getElementById('factDisplay').innerHTML;

  await navigator.clipboard.writeText(fact);

  copiedFact.style.display = "block";

  setTimeout(() => {

  copiedFact.style.visibility = 'hidden';

}, 2000);

};   