/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    insert(word) {
        // TODO Insert word symbol by symbol
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode(word[i]);
            }

            node = node.children[word[i]];

            if (i == word.length - 1) {
                node.isWord = true;
            }
        }
    }
}

module.exports = { Trie };
