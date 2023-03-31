export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    // or "poll" or "pop"
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const Lidx = this.leftChild(idx);
        const Ridx = this.rightChild(idx);

        if (idx >= this.length || Lidx >= this.length) {
            return;
        }

        const lV = this.data[Lidx];
        const rV = this.data[Ridx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[Ridx] = v;
            this.heapifyDown(Ridx);
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV;
            this.data[Lidx] = v;
            this.heapifyDown(Lidx);
        }
    }
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];

        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
