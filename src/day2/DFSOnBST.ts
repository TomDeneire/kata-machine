export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (!head) {
        return false;
    }
    if (head.value === needle) {
        return true;
    }
    if (!head.right) {
        return false;
    }
    if (head.value < needle) {
        return dfs(head.right, needle);
    }
    if (!head.left) {
        return false;
    }
    return dfs(head.left, needle);
}
