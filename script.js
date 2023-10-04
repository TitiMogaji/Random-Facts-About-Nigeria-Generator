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
'Platypuses are venomous. Male Platypus have venomous spurs on their hind feet.', 
'Platypus use electronic impulses to detect underwater prey and locate objects in the darkest depths of the creeks and rivers they call home.', 
'Platypus babies are called Puggles', 
'Lemurs are only native to Madagascar and there are over 100 species of Lemur', 
'The Etruscan Shrew is the smallest mammal on earth and weighs an average of 1.8 grams',
'A crickets ears are just below the knees of its front legs.',
'There are over 1,400 species of bats worldwide.',
'Bats are the only flying mammal.',
'Hummingbirds are the only birds that can fly backwards.',
'Crocodiles cannot stick their tongue out.',
'Koalas are folivore specialists and can digest poisonous Eucalyptus leaves',
'Cheetahs are blisteringly fast and can reach speeds up to 64 miles per hour in 3 seconds, making them the fastest land animals in the world over short distances.',
'Elephants use their trunks to suck up water to drink, it can contain up to 8 litres of water.'];

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