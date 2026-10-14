/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- L'array starWarsCharacters è già preparato qui sotto: NON modificarlo a inizio file.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const starWarsCharacters = [
	{
		name: 'Luke Skywalker',
		height: '172',
		mass: '77',
		hair_color: 'blond',
		skin_color: 'fair',
		eye_color: 'blue',
		birth_year: '19BBY',
		gender: 'male',
	},
	{
		name: 'C-3PO',
		height: '167',
		mass: '750',
		hair_color: 'n/a',
		skin_color: 'gold',
		eye_color: 'yellow',
		birth_year: '112BBY',
		gender: 'n/a',
	},
	{
		name: 'R2-D2',
		height: '96',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, blue',
		eye_color: 'red',
		birth_year: '33BBY',
		gender: 'n/a',
	},
	{
		name: 'Darth Vader',
		height: '202',
		mass: '136',
		hair_color: 'none',
		skin_color: 'white',
		eye_color: 'yellow',
		birth_year: '41.9BBY',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: '150',
		mass: '49',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '19BBY',
		gender: 'female',
	},
	{
		name: 'Owen Lars',
		height: '178',
		mass: '120',
		hair_color: 'brown, grey',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '52BBY',
		gender: 'male',
	},
	{
		name: 'Beru Lars',
		height: '165',
		mass: '75',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '47BBY',
		gender: 'female',
	},
	{
		name: 'R5-D4',
		height: '97',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, red',
		eye_color: 'red',
		birth_year: 'unknown',
		gender: 'n/a',
	},
	{
		name: 'Biggs Darklighter',
		height: '183',
		mass: '84',
		hair_color: 'black',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '24BBY',
		gender: 'male',
	},
	{
		name: 'Obi-Wan Kenobi',
		height: '182',
		mass: '77',
		hair_color: 'auburn, white',
		skin_color: 'fair',
		eye_color: 'blue-gray',
		birth_year: '57BBY',
		gender: 'male',
	},
];

/* ESERCIZIO 1 — Estrai i nomi
   Array vuoto "nomi". Con un for, fai push di ogni starWarsCharacters[i].name.
   Stampa "nomi".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const characterName = []
for (let i = 0; i < starWarsCharacters.length; i++) {
	let character = starWarsCharacters[i]
	characterName.push(character.name)
}
console.log(characterName,"1 Characters name")


/* ESERCIZIO 2 — Solo i femminili
   Array vuoto "personaggiFemminili". Con un for + if (gender === "female"),
   crea un nuovo oggetto { name, hair_color, eye_color } e fai push.
   Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("2-----------------")
const femaleCharacter = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
	let f = starWarsCharacters[i]
	if (f.gender === "female") {
		femaleCharacter.push({
			name: f.name,
			hair_color: f.hair_color,
			eye_color: f.eye_color
		})
	}
}
console.log(femaleCharacter, "female")

/* ESERCIZIO 3 — Oggetto raggruppamento
   Crea perColoreOcchi con chiavi: blue, yellow, brown, red, blue-gray (con trattino).
   Ognuna con un array vuoto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("3-----------------")
const perColoreOcchi = {
	blue: [],
	yellow: [],
	brown: [],
	red: [],
	"blue-gray": []
};

/*
ESERCIZIO 4 — Raggruppa per colore degli occhi
   For su starWarsCharacters + switch (character.eye_color).
   In ogni case fai push del personaggio nell'array giusto. Ricorda break.
   Stampa perColoreOcchi.
*/

console.log("4-----------------")
for (let i = 0; i < starWarsCharacters.length; i++) {
	eyeColor = starWarsCharacters[i]
	switch (eyeColor) {
		case ("blu"):
			perColoreOcchi.blue.push(eye)
			break
		case ("yellow"):
			perColoreOcchi.yellow.push(eye)
			break
		case ("brown"):
			perColoreOcchi.brown.push(eye)
			break
		case ("red"):
			perColoreOcchi.red.push(eye)
			break
		case ("blue-gray"):
			perColoreOcchi["blue-gray"].push(eye)
			break
	}
}
console.log(perColoreOcchi, "a");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Massa totale dell'equipaggio (while)
   i = 0, massaTotale = 0.
   While: somma Number(starWarsCharacters[i].mass).
   Stampa la massa totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("5-----------------")
let i = 0
let massaTotale = 0;
while (i < starWarsCharacters.length) {
	let massa = starWarsCharacters[i].mass
	massaTotale = massaTotale + Number(massa)
	i++
}
console.log(massaTotale, "Totale");



/* ESERCIZIO 6 — Classifica il carico

   Su massaTotale, switch (true) o if/else if:
   < 500            → "Carico leggero"
   500 – 700        → "Carico medio"
   700 – 900        → "Attenzione: oltre 700"
   900 – 1000       → "Carico critico"
   > 1000           → "PERICOLO: sovraccarico"
*/
console.log("6-----------------")
/* SCRIVI QUI LA TUA RISPOSTA */
switch (true) {
	case massaTotale < 500:
		console.log("carico leggero")
	case massaTotale < 700:
		console.log("carico medio")
	case massaTotale > 1000:
		console.log("PERICOLO: sovraccarico")
}


/* ESERCIZIO 7 — Robotizza i n/a
   For: per ogni personaggio con gender === "n/a", cambialo in "robot".
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("7-----------------")
const lisagenderfemale = []
for (let i = 0; i < starWarsCharacters.length; i++) {
	let character = starWarsCharacters[i]
	if (character.gender == "n/a") {
		character.gender = "robot"
	}
	console.log(character, "gender robot")
}

console.log(lisagenderfemale)
/* ESERCIZIO 8 — Più alto e più basso
   For su starWarsCharacters. Trova il personaggio con altezza maggiore e quello con altezza minore.
   L'altezza è una stringa: convertila con Number().
   Stampa: "Più alto: Darth Vader (202 cm)" e "Più basso: ...".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('----------')
console.log('8----------')
let moreHeight = 0
let lessHeight = 0

for(let i = 0; i < starWarsCharacters.length; i++){
	let character = Number(starWarsCharacters[i].height)
	if (character > moreHeight) {
		moreHeight = moreHeight + character
	}
	else if(character < moreHeight){
		lessHeight = moreHeight + character
	}
}
console.log("min",moreHeight)
console.log("max",lessHeight)

/* ESERCIZIO 9 — Rimuovi i femminili dai nomi (cicli annidati)
   Sull'array "nomi" dell'esercizio 1: for esterno su nomi, for interno su personaggiFemminili.
   Quando combaciano per nome, rimuovi quel nome da nomi con splice.
   Stampa lunghezza prima e dopo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 — Personaggio casuale
   indice = Math.floor(Math.random() * starWarsCharacters.length)
   personaggio = starWarsCharacters[indice]
   if/else su gender per stampare "Lei è alta X cm" o "Lui è alto X cm".
   if su hair_color !== "n/a" && hair_color !== "none": stampa "Capelli: X" o "Senza capelli".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 11 — Conta per colore di occhi
   For...in sulle chiavi di perColoreOcchi.
   Stampa: "blue: 4 personaggi", "yellow: 2 personaggi", ecc.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
