export class Squares {
    private _n: number;

    constructor(count: number) {
        this._n = count;
    }

    // http://www.batmath.it/matematica/avista/somma_quadr/somma_quadr.htm
    get sumOfSquares(): number {
        return (this._n * (this._n + 1) * (2 * this._n + 1)) / 6;
    }

    get squareOfSum(): number {
        return ((this._n * (this._n + 1)) / 2) ** 2;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}
