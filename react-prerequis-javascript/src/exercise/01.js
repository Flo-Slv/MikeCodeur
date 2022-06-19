// ESModule Import / Export
// http://localhost:3000/alone/exercise/01.js

// 🐶 Importe 'init' et 'displayText' du module qui permet d'afficher un texte dans la page de l'exercice
//  🤖 import displayText, {init} from './helper/exerciseHelper'
import calculAir, { calculPerimetre, TEMP_MAX } from './helper/roomHelper.js';
import displayText, { init } from './helper/exerciseHelper.js';
// 🐶 Affiche 'HelloWorld' dans la page grace à la fonction `displayText` importée
// Atention il faut appeler une fois la fonction init avant les appels à displayText
//  🤖 init()
//  🤖 displayText("Hello World")
init();
displayText("Hello World !");

// 🐶 Pour la suite de l"exercice il faut aller renseigner le module dans
// `src/helper/roomHelper.js`

// 🐶 Importe tout du module roomHelper

// 🐶 Utilise ces 3 fonctions pour créér les bons libéllés
// 🤖 let lib = "Air de d'un pièce de 2 par 5 donne " + ...
// Utilise displayText pour afficher ces 3 libéllés
let air = `Air d'une piece de 2 par 5 donne: ${calculAir(2, 5)}`;
let perimetre = `Perimetre d'une piece de 2 par 5 donne: ${calculPerimetre(2, 5)}`;
let temp = `Temperature de la piece est de: ${TEMP_MAX} degrees.`;

displayText(air);
displayText(perimetre);
displayText(temp);
