/**
 * Seminar 2.2 Transaction output
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Transaction {
    constructor(from, to, value) {
        // Init transaction from, to, value, spent, hash 
        this.from = from;
        this.to = to;
        this.value = value;
        this.hash = SHA256(utf8ToBytes(from+to+value));
        this.spent = false;
    }
    spend() {
        // Check is transaction spent
        if (!this.spent) {
            this.spent = true;
        } else {
            throw new Error('Already spended!');
        }
    }
}

module.exports = { Transaction }
