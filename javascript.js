const name = "Oskar";
const age = 25;

console.log(
  `Cześć,nazywam się ${name}. Mam ${age} lat i uczę się frontendu-ponieważ frontend to sztuka!`
);
const emptyParagraph = document.querySelector('.main__paragraph--js');
emptyParagraph.innerText = 'KŁEBA OMBRE';

const whyDoThatToMe = {
  name: 'ULĄG',
  numberOfHands: 5,
  numberOfHeads: 1,
  numberOfLegs: 30,
  numberOfFrustrations: 100,
}

console.log(whyDoThatToMe)

whyDoThatToMe.numberOfHands = 1