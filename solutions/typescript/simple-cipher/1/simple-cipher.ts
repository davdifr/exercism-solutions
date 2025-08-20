export const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
export const DEFAULT_KEY_LENGHT = 100;

export class SimpleCipher {
    private _convertedKey: number[] = [];

    constructor(public key: string = '') {
        if (key !== '') {
            this.evaluateConvertedKey(key);
        } else {
            this.generateRandomKey();
        }
    }

    encode(messages: string): string {
        let encodedMessages = '';

        for (let i = 0; i < messages.length; i++) {
            const keyIndex = this._convertedKey[i % this.key.length];
            const charIndex = alphabet.indexOf(messages[i]);

            const newIndex = (charIndex + keyIndex) % 26;
            encodedMessages += alphabet[newIndex];
        }

        return encodedMessages;
    }

    decode(messages: string): string {
        let decodedMessages = '';

        for (let i = 0; i < messages.length; i++) {
            const keyIndex = this._convertedKey[i % this.key.length];
            const charIndex = alphabet.indexOf(messages[i]);

            const newIndex = (26 + (charIndex - keyIndex)) % 26;
            decodedMessages += alphabet[newIndex];
        }

        return decodedMessages;
    }

    private generateRandomKey(): void {
        for (let i = 0; i < DEFAULT_KEY_LENGHT; i++) {
            const charIndex = Math.floor(Math.random() * 26);

            this.key += alphabet[charIndex];
            this._convertedKey.push(charIndex);
        }
    }

    private evaluateConvertedKey(key: string): void {
        this._convertedKey = [...key].map((char) => alphabet.indexOf(char));
    }
}
