const globals = {
	birth_rate: 1 / (2 * 4 * 9)
};

class Kingdom {
	constructor() {
		this.resources = {
			land: 1,
			people: 2,
			food: 1
		};

		this.day = 1;
	}
}

let kingdom = new Kingdom();

// game cycle
setInterval(() => {
	const dt = 0.1;

	// time system
	kingdom.day += 30 * dt;

	// birth system
	let people_d = kingdom.resources.people * globals.birth_rate * dt;
	kingdom.resources.people += Math.trunc(people_d);

	if (Math.random() <= people_d % 1) kingdom.resources.people++;

	// display system
	new Map(Object.entries(kingdom.resources)).forEach((value, resource) => {
		document.getElementById(`resource_${resource}`).textContent 
			= Math.trunc(value);
	});

	let month = Math.trunc(kingdom.day / 30);
	document.getElementById("date").textContent 
		= `1.${month % 12}.${Math.trunc(month / 12)}`
}, 50);
