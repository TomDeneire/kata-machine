export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // technically we're using an array here instead of a queue, so it's going
    // to have some different running times than a real que
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
