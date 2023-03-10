export default function bs_list(haystack: number[], needle: number): boolean {
    let lo: number = 0;
    let hi: number = haystack.length;

    while (lo < hi) {
        let middle: number = Math.floor((hi + lo) / 2);
        let value = haystack[middle];

        if (value === needle) {
            return true;
        } else if (needle > value) {
            lo = middle + 1;
        } else {
            hi = middle;
        }
    }

    return false;
}
