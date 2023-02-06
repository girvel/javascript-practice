class Kingdom {
	constructor() {
		this.resources = new Map(Object.entries({
			land: 1,
			people: 2,
			food: 1
		}));
	}
}

let kingdom = new Kingdom();

// game cycle
setInterval(() => {

	// display system
	kingdom.resources.forEach((value, resource) => {
		document.getElementById(`resource_${resource}`).textContent = value;
	});
}, 50);
