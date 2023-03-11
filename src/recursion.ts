function foo(n: number): number {
    // Base Case
    if (n === 1) {
        console.log("return 1;");
        return 1;
    }

    // We shall Recurse!
    console.log("return " + n + " + foo(" + n + "-1)");
    return n + foo(n - 1);
}

console.log("foo(5)");
console.log(foo(5));
