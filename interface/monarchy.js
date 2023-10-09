class Person {
	constructor(name) {
		this._name = name;
		this._children = [];
		this._alive = true;
	}

	birth = (child) => {
		this._children.push(child);
	};

	death = () => {
		this._alive = false;
	};

	name = () => {
		return this._name;
	};

	children = () => {
		return this._children;
	};

	isAlive = () => {
		return this._alive;
	};
}

class Monarchy {
	constructor(king) {
		this._king = new Person(king);
		this._members = new Map();
		this._members.set(king, this._king);
	}

	birth = (child, parent) => {
		const p = this._members.get(parent);
		if (p == undefined) {
			/** parent does not exist */
			return null;
		}
		const c = new Person(child);
		p.birth(c);
		this._members.set(child, c);
	};

	death = (person) => {
		const p = this._members.get(person);
		if (p == undefined) {
			/** parent does not exist */
			return null;
		}
		p.death();
	};

	getOrderOfSuccession = () => {
		const list = [];
		this._getOrderOfSuccession(this._king, list);
		return list;
	};

	_getOrderOfSuccession = (root, list) => {
		const name = root.name();
		if (root.isAlive()) list.push(name);
		for (let child of root.children()) {
			this._getOrderOfSuccession(child, list);
		}
	};
}

const monarchy = new Monarchy('Jake');
monarchy.birth('Catherine', 'Jake');
monarchy.birth('Jane', 'Catherine');
monarchy.birth('Farch', 'Jane');
monarchy.birth('Tom', 'Jake');
monarchy.birth('Celine', 'Jake');
monarchy.birth('Mark', 'Catherine');
monarchy.birth('Peter', 'Celine');
monarchy.death('Catherine');

console.log(monarchy.getOrderOfSuccession());
