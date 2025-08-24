export function transform(dataset: { [key: string]: string[] }): {
    [key: string]: number;
} {
    const newDataset: Record<string, number> = {};

    for (const key in dataset) {
        for (const value of dataset[key]) {
            newDataset[value.toLowerCase()] = Number(key);
        }
    }

    return newDataset;
}
