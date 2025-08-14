export const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

export function encode(plainText: string): string {
    const sanitizedText = plainText.replace(/ /g, '').toLowerCase();

    let cipherText = '';
    let counter = 0;

    for (let i = 0; i < sanitizedText.length; i++) {
        if (counter !== 0 && counter % 5 === 0) {
            cipherText += ' ';
            counter = 0;
        }

        const index = alphabet.indexOf(sanitizedText[i]);

        // Not in alphabet
        if (index === -1) {
            const toNumber = Number(sanitizedText[i]);
            if (!isNaN(toNumber)) {
                cipherText += sanitizedText[i];
                counter++;
            }
        } else {
            cipherText += alphabet[alphabet.length - 1 - index];
            counter++;
        }
    }

    return cipherText;
}

export function decode(cipherText: string): string {
    const sanitizedText = cipherText.replace(/ /g, '');

    let decodedText = '';

    for (let i = 0; i < sanitizedText.length; i++) {
        const index = alphabet.indexOf(sanitizedText[i]);

        if (index === -1) {
            const toNumber = Number(sanitizedText[i]);
            if (!isNaN(toNumber)) {
                decodedText += sanitizedText[i];
            }
        } else decodedText += alphabet[alphabet.length - 1 - index];
    }

    return decodedText;
}
