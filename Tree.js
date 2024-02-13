/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNext(parent, child){
        if (child.data <= parent.data){
            if (parent.left == null){
                parent.left = child;
                return;
            } else {
                this.addNext(parent.left, child);
                return;
            }
        } else {
            if (parent.right == null){
                parent.right = child;
                return;
            } else {
                this.addNext(parent.right, child);
                return;
            }
        }
    }

    addNode(node){
        // Implement 
        if (this.root == null){
            this.root = node;
            return;
        }
        this.addNext(this.root, node);
    }

    hasNext(parent, data){
        if (parent.data == data){
            return true;
        } else {
            if (data < parent.data){
                if (parent.left == null){
                    return false;
                } else {
                    return this.hasNext(parent.left, data);
                }
            }         
            if (data > parent.data){
                if (parent.right == null){
                    return false;
                } else {
                    return this.hasNext(parent.right, data);
                }
            }
        }
    }

    hasNode(data){
        // Implement 
        return this.hasNext(this.root, data);
    }
}



module.exports = { Node, Tree }
