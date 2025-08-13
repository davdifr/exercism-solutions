export class Node<T> {
    constructor(
        public value: T,
        public prev: Node<T> | null = null,
        public next: Node<T> | null = null
    ) {}
}

export class LinkedList<T> {
    constructor(
        private _head: Node<T> | null = null,
        private _tail: Node<T> | null = null,
        private _counter: number = 0
    ) {}

    public push(element: T): void {
        const newNode = new Node(element);

        if (this._head === null && this._tail === null) {
            this._head = this._tail = newNode;
        } else if (this._head) {
            const currentHead = this._head;

            newNode.prev = currentHead;
            currentHead.next = newNode;

            this._head = newNode;
        }

        this._counter++;
    }

    public pop(): T | null {
        if (this._head) {
            const previousNode = this._head.prev;
            const currentHead = this._head;

            if (previousNode) {
                previousNode.next = null;
                this._head = previousNode;
            } else {
                this._tail = null;
                if (currentHead.next === null) this._head = null;
            }

            this._counter--;

            return currentHead.value;
        }

        return null;
    }

    public shift(): T | null {
        if (this._tail) {
            const currentTail = this._tail;
            const nextTail = currentTail.next;

            if (nextTail) {
                nextTail.prev = null;
                this._tail = nextTail;
            } else {
                this._head = null;
                if (currentTail.prev === null) this._tail = null;
            }

            this._counter--;

            return currentTail.value;
        }

        return null;
    }

    public unshift(element: T) {
        const newNode = new Node(element);

        if (this._head === null && this._tail === null) {
            this._head = this._tail = newNode;
        } else if (this._tail) {
            const currentTail = this._tail;

            currentTail.prev = newNode;
            newNode.next = currentTail;

            this._tail = newNode;
        }

        this._counter++;
    }

    public delete(element: T): T | null {
        if (!(this._tail && this._head)) return null;

        if (this._tail?.value === element) {
            return this.shift();
        }

        if (this._head?.value === element) {
            return this.pop();
        }

        let currentNode = this._tail;

        while (currentNode.next !== null) {
            if (currentNode.value === element) {
                const previousNode = currentNode.prev;
                const nextNode = currentNode.next;

                if (previousNode) previousNode.next = nextNode;

                if (nextNode) nextNode.prev = previousNode;

                this._counter--;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    public count(): number {
        return this._counter;
    }
}
