const fs = require("fs");
const file = process.argv[2];
const text = fs.readFileSync(file).toString();

let start = false;
let end = false;
let innerTag = "";

function render(text, users) {
	
	

	let output = "";
	for (let i = 0, len = text.length; i < len; i++) {
		const char = text[i];
		if (char === '{') {
			start = true;
		}
		if (char === '}') {
			end = true;
		}
		if (start === true) {
			innerTag += char;
		}
		if (!start && !end) {
			output += char;
		}
		if (start && end) {
			start = false;
			end = false;
			let value = users[0]; //avec cette fonction les accolades vont etres ignorés pour qu'on puisse afficher juste le nom
			output += value;
			innerTag = "";
		
		}
	
	}
	for (let j = 0; j < users.length ; j++) {
		console.log('-'+users[j]);	
		
	}

	return output;

}

const data = {
	name: "John",
}

const users = {
	name: "marie",
	name:"john",
}




//for ( var i=0 ; i < users.length ; i++){
	//console.log(users[0]);
//}

/*et user= new Map([
	['name', 'Mary'],
	['name', 'john'],

  ]);
let user1=Object.values(users);
console.log(user1);*/
const users1= [
	{ nom : "John"},
	 {nom : "Mary"}
	]
const user = users1.map(users => {
    return users.nom;
})





const output = render(text,user);
console.log('Output is : ');
console.log(output);
fs.writeFileSync("output.txt", output);


