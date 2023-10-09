class TrieNode {
	constructor() {
		this._isEnd = false;
		this._children = new Map();
	}

	isEnd = () => {
		return this._isEnd;
	};

	setEnd = () => {
		this._isEnd = true;
	};

	append = (char, node) => {
		this._children.set(char, node);
	};

	getChild = (char) => {
		return this._children.get(char);
	};
}

class Trie {
	constructor() {
		this._root = new TrieNode();
	}

	insert = (s, node = this._root) => {
		if (s.length === 0) this._root.setEnd();

		let char = s.charAt(0);
		let child = node.getChild(char);
		if (!child) {
			child = new TrieNode();
			node.append(char, child);
		}
		this.insert(s.substring(1), child);
	};

	search = (s, node = this._root) => {
		if (s.length === 0) return node.isEnd();

		let child = node.getChild(prefix.charAt(0));
		if (!child) return false;
		return this.search(s.substring(1), child);
	};

	startsWith = (prefix, node = this._root) => {
		if (prefix.length === 0) return true;

		let child = node.getChild(prefix.charAt(0));
		if (!child) return false;
		return this.startsWith(prefix.substring(1), child);
	};
}
