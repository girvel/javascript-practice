const globals = {
	birth_rate: 1 / (4 * 9),
};

class Kingdom {
	constructor() {
		this.resources = new Map(Object.entries({
			land: 1,
			people: 2,
			food: 1
		}));

		this.day = 1;
	}
}

let kingdom = new Kingdom();

// game cycle
setInterval(() => {

	// time system
	kingdom.day += 3;

	// display system
	kingdom.resources.forEach((value, resource) => {
		document.getElementById(`resource_${resource}`).textContent = value;
	});

	let month = Math.trunc(kingdom.day / 30);
	document.getElementById("date").textContent 
		= `1.${month % 12}.${Math.trunc(month / 12)}`
}, 50);
