// Array : Les Méthodes courantes
// http://localhost:3000/alone/exercise/06.js

import displayText, {init} from './helper/exerciseHelper';
init('Array : Les Méthodes courantes');

const computers = [
  {
    id: 'pc-1',
    name: 'MacBook Pro',
    features: [
      'usb-c',
      'screen-15',
      'batterie',
      'keyboard',
      'webcam',
      'ssd-1to',
    ],
  },
  {
    id: 'pc-2',
    name: 'Lenovo',
    features: ['usb-a', 'screen-15', 'batterie', 'keyboard', 'ssd-500go'],
  },
  {
    id: 'pc-3',
    name: 'MSI',
    features: [
      'usb-a',
      'screen-13',
      'batterie',
      'keyboard',
      'webcam',
      'ssd-500go',
    ],
  },
];

// 🐶 Affiche à l'ecran (displayText) :
// `Mon ordinateur préferé est le MacBook Pro`
// 🤖 en passant par la méthode find
let favorite = computers.find(computer => computer.name == "MacBook Pro");
console.log(favorite);
displayText(`Mon ordinateur préferé est le ${favorite.name}`);

// 🐶 Code ce qui permet de savoir s'il il y a au moins un ssd-500go
// 🤖 en passant par la méthode `some`
let some = computers.some(computer => computer.features.includes('ssd-500go'));
displayText(`Y a t-il au moins un pc avec un ssd-500go ? :  ${some}`);

// 🐶 Code ce qui permet de savoir s'il il y a que des ssd-500go
// 🤖 en passant par la méthode `every`
let every = computers.every(computer => computer.features.includes('ssd-500go'));
displayText(`Tous les pc ont un ssd-500go ? : ${every}`)

// 🐶 Affiche la liste des ids
// 🤖 en passant par la méthode `map`
let ids = computers.map(computer => computer.id);
console.log(ids);
displayText(`Tous les ids: ${ids.toString()}`)

// 🐶 Récuperer la liste des pc avec une webcam
// 🤖 en passant par la méthode `filter`
let res = computers.filter(computer => computer.features.includes('webcam'));
res = res.map(i => i.name);
displayText(`Les pc avec webcam : ${res.toString()}`);
