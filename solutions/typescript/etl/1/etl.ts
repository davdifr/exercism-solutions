export function transform(dataset: { [key: string]: string[] }): {
    [key: string]: number;
} {
    const newDataset: Record<string, number> = {};

    Object.keys(dataset).forEach((key) => {
        for (const value of dataset[key]) {
            newDataset[value.toLowerCase()] = Number(key);
        }
    });

    return newDataset;
}
