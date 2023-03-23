export default class ArrayList<T> {
    public length: number;
    public data: T[];

    constructor(length: number) {
        this.length = length;
        const data: T[] = [];
        this.data = data;
    }

    prepend(item: T): void {
        let data: T[] = [];
        data[0] = item;
        if (this.length === 0) {
            this.length++;
            this.data = data;
            return;
        }
        for (let i = 0; i < this.length; ++i) {
            data[i + 1] = this.data[i];
        }
        this.data = data;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }
        let data: T[] = [];
        let inserted: boolean = false;

        for (let i = 0; i < this.length; ++i) {
            if (i === idx) {
                data[i] = item;
                data[i + 1] = this.data[i];
            } else {
                if (inserted) {
                    data[i + 1] = this.data[i];
                } else {
                    data[i] = this.data[i];
                }
            }
        }

        this.data = data;
        this.length++;
    }

    append(item: T): void {
        for (let i = 0; i < this.length; ++i) {
            if (this.data[i] === undefined) {
                this.data[i] = item;
                return;
            }
        }
        this.length++;
        this.data[this.length - 1] = item;
    }

    remove(item: T): T | undefined {
        let value: T | undefined = undefined;
        let data: T[] = [];
        let removed: boolean = false;
        let j: number = 0;
        for (let i = 0; i < this.length; ++i) {
            if (this.data[i] === item) {
                removed = true;
                value = this.data[i];
            } else {
                data[j] = this.data[i];
                j++;
            }
        }
        if (!removed) {
            return undefined;
        }
        this.length--;
        this.data = data;
        return value;
    }

    get(idx: number): T | undefined {
        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        const value = this.data[idx];
        let list: T[] = [];
        let j: number = 0;
        for (let i = 0; i < this.length; ++i) {
            if (i === idx) {
                continue;
            } else {
                list[j] = this.data[i];
                j++;
            }
        }
        this.length--;
        this.data = list;
        return value;
    }
}
