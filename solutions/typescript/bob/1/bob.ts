export function hey(message: string): string {
    const cleanedMessage = message.trim();

    const questionResponse = 'Sure.';
    const yellResponse = 'Whoa, chill out!';
    const yellQuestionResponse = "Calm down, I know what I'm doing!";
    const silenceResponse = 'Fine. Be that way!';
    const elseResponse = 'Whatever.';

    if (cleanedMessage.length === 0) return silenceResponse;

    const messageIsUpper = isUpperCase(cleanedMessage);
    const messageIsQuestion = cleanedMessage.endsWith('?');

    if (messageIsQuestion && messageIsUpper) return yellQuestionResponse;
    if (messageIsQuestion) return questionResponse;
    if (messageIsUpper) return yellResponse;

    return elseResponse;
}

export function isUpperCase(message: string) {
    let letterFound = false;

    for (const char of message) {
        if (char.toUpperCase() !== char.toLowerCase()) {
            letterFound = true;
            if (char !== char.toUpperCase()) return false;
        }
    }

    return letterFound;
}
