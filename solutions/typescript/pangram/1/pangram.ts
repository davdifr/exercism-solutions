export function isPangram(sentence: string): boolean {
    const alphabet = new Set<string>([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'x',
        'y',
        'z',
    ]);

    const sentenceLower = [...sentence.toLowerCase()];

    sentenceLower.forEach((char) => {
        if (alphabet.has(char)) alphabet.delete(char);
    });

    if (alphabet.size) return false;
    else return true;
}
