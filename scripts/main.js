function queryData(root, data_kind, value) {
	return root.querySelector(`[data-${data_kind}="${value}"]`);
}

const globals = {
	birth_rate: 1 / (2 * 4 * 9),
	land_capacity: 10,
	growth_rate: 15,
};

class Kingdom {
	constructor() {
		this.resources = {
			land: 1,
			people: 2,
			food: 5,
		};

		this.day = 1;
	}
}

let kingdom = new Kingdom();

// actions
let bindings = document.getElementById("bindings");

document.addEventListener('keydown', event => {
	if (event.code === 
		"Key" + queryData(bindings, "action", "sell").textContent
	) {
		if (kingdom.resources.food >= 100) {
			kingdom.resources.food -= 100;
			kingdom.resources.land++;
		}
	}
});

// game cycle
setInterval(() => {
	const dt = 0.1;

	// time system
	kingdom.day += 30 * dt;

	// birth system
	const people_d = kingdom.resources.people * globals.birth_rate * dt;
	kingdom.resources.people += Math.trunc(people_d);

	if (Math.random() <= people_d % 1) kingdom.resources.people++;

	// food production system
	kingdom.resources.food += Math.min(
		kingdom.resources.land,
		kingdom.resources.people / globals.land_capacity
	) * globals.growth_rate * dt;

	// food consumption system
	const food_d = Math.min(kingdom.resources.food, kingdom.resources.people);
	kingdom.resources.food -= food_d * dt;
	kingdom.resources.people = food_d;

	// display system
	const resources_block = document.getElementById("resources");
	new Map(Object.entries(kingdom.resources)).forEach((value, resource) => {
		queryData(resources, "resource", resource).textContent 
			= Math.trunc(value);
	});

	const month = Math.trunc(kingdom.day / 30);
	document.getElementById("date").textContent 
		= `1.${month % 12}.${Math.trunc(month / 12)}`;
}, 50);
