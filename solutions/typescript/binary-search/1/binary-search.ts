export function find(
    haystack: number[],
    needle: number,
    low?: number,
    high?: number
): number | never {
    if (low === undefined) low = 0;
    if (high === undefined) high = haystack.length - 1;

    if (low > high) throw new Error('Value not in array');

    const middle = Math.floor((low + high) / 2);
    const value = haystack[middle];

    if (value === needle) return middle;

    if (value < needle) return find(haystack, needle, middle + 1, high);

    return find(haystack, needle, low, middle - 1);
}
