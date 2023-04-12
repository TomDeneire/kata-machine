class TrieNode {
    public isWord: boolean;
    public value: string;
    public items: number[];
    public children: TrieNode[];

    constructor() {
        this.isWord = false;
        this.value = "";
        this.items = [];
        this.children = [];
    }
}

function idx(str: string) {
    return str.charCodeAt(0);
}

export default class Trie {
    public head: TrieNode;

    constructor() {
        this.head = new TrieNode();
    }

    insert(item: string): void {
        let curr = this.head;
        const chars = [...item];
        for (let i = 0; i < chars.length; ++i) {
            let c = chars[i];
            if (curr.items[idx(c)]) {
                curr = curr.children[i];
            } else {
                const node = new TrieNode();
                node.value = c;
                curr.items.push(idx(c));
                curr.children.push(node);
                curr = node;
            }
        }
        curr.isWord = true;
    }
    delete(item: string): void {}
    find(partial: string): string[] {
        let result: string[] = [];
        return result;
    }
}
