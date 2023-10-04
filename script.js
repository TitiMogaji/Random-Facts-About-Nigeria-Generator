let facts = ['Pangolins are the only scaly mammal', 
'Pangolins do not have teeth and are unable to chew. Instead, they have long sticky tongues that they use to catch the insects they feed on. Their tongues can be up to 16 inches long!', 
'Dik-Diks, a small antelope, use a tar-like liquid from their eye glands to mark their territory.', 
'All sloths are colour-blind, and can only see poorly in dim light and are completely blind in bright daylight.', 
'Sloths are anatomically designed to fall out of trees. On average, a sloth will fall out of a tree once a week for its entire life.', 
'Puffins are fab flyers, flapping their wings up to 400 times a minute and speeding through the air at up to 88km an hour.', 'A baby puffin is called a puffling.', 
'Rabbits have 3 eyelids!', 
'Snakes have no eyelids.', 
'The desert rain frog makes a high-pitched squaking sound when threatened.', 
'Pangolin means Roller. The word Pangolin comes from penggulung, the Malay word for roller, the action a pangolin takes in self-defense', 
'Pangolins scales account for up to 20% of their entire weight.', 
'Octopuses have 3 hearts.', 
'Octopuses can regrow their limbs.', 
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