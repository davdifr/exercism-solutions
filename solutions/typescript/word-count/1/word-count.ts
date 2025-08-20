export function count(subtitle: string): Map<string, number> {
    const wordCounts = new Map<string, number>();

    const lower = subtitle.toLowerCase();
    const words = lower.match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) || [];

    for (const word of words) {
        wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1);
    }

    return wordCounts;
}
