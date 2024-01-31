class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        /**pseudocode
         * takes in a value
         * adds it to the end of the linked list class to the end of the list
         */
        const newNode = new node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;

        }

    }

    prepend(value) {
        /**pseudocode
           * takes in a value
           * adds it to the end of the linked list class to the start of the list
           */
        this.head = new node(value)

    }

    size() {

        let sum = 0;
        let current = this.head;

        while (current) {
            sum++
            current = current.next;
        }

        console.log(sum);
        /**
         * sets a variable number
         * calls the linked list and for each 'value' number is incremented by one
         * returns or prints number
         */

    }

    head() {
        //calls linked list and checks for this.head if node it is on isnt this.head it goes to another node
        if (this.head)
            return this.head;
        else {
            return 'no head here'
        }
    }

    tail() {
        //calls linked list and checks for this.head if node it is on isnt this.head it goes to another node
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        let tail = current.next
        return tail
    }

    at(index) {
        let node = this.head;
        let i = 0;

        while (node) {
            node = node.next;
            i++;

            if (i === index) {
                return node;
            }
            return 'not a value in list'
        }

    }

    pop() {
        let current = this.head;
        if (!current) {
            return;
        } while (current) {
            current = current.next
        }
        current = null

    }

    contains(value) {
        let node = this.head;

        while (node) {
            if (node.value === value)
                return true;
            else {
                node = node.next
            }

        }
    }


    find(value) {
        let nod = this.head;
        let index = 0;

        while (nod) {
            if (nod.value === value)
                return index;
            else {
                nod = nod.next
                index++
            }
        }
    }

}