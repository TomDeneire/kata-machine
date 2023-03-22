function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // undefined is the base case of trying to visit a node that does not exist
    if (!curr) {
        return path;
    }

    // recursion steps
    // pre
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
