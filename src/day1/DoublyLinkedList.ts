type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; ++i) {
            curr = curr.next;
        }
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {}
}
