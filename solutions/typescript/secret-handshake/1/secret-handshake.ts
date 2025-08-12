export function commands(num: number): string[] {
    // num is between 1 and 31
    if (num < 1 || num > 31) return [];

    let result: string[] = [];

    // const binary = num.toString(2);

    // ensure always 5 digit
    // const digits = binary.padStart(5, '0');

    // if (digits[4] === '1') result.push('wink');
    // if (digits[3] === '1') result.push('double blink');
    // if (digits[2] === '1') result.push('close your eyes');
    // if (digits[1] === '1') result.push('jump');
    // if (digits[0] === '1') result.reverse();

    const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
    const binary = num.toString(2).split('').reverse();

    result = actions.filter((_, i) => binary[i] === '1');

    if (binary[4] === '1') result.reverse();

    return result;
}
