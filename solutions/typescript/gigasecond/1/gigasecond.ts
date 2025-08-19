export const GIGASECOND = 1_000_000_000_000;

export class Gigasecond {
    constructor(public timestamp: Date) {}

    public date(): Date {
        const timestampNumber = Number(this.timestamp);
        const resultDate = new Date(timestampNumber + GIGASECOND);

        return resultDate;
    }
}
