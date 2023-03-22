function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // undefined is the base case of trying to visit a node that does not exist
    if (!curr) {
        return path;
    }

    // recursion steps
    // pre

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    path.push(curr.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
