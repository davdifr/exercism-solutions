// Some potential approaches:
// Linear or binary search for a number that gives the input number when squared.

export function squareRoot(radicand: number): number {
    let left = 0;
    let right = radicand + 1;

    while (left !== right - 1) {
        const middle = Math.floor((left + right) / 2);

        if (middle * middle <= radicand) left = middle;
        else right = middle;
    }

    return left;
}
