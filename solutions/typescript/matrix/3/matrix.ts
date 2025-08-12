export class Matrix {
    private _matrix: number[][];

    constructor(public input: string) {
        this._matrix = this.input
            .split('\n')
            .map((row) => row.split(' ').map(Number));
    }

    get rows() {
        return this._matrix;
        // return new Proxy(this._matrix, {
        //     get: (target, prop) => {
        //         const i = Number(prop);
        //         return target[i];
        //     },
        // });
    }

    get columns() {
        return this._matrix.map((_, i, arr) => arr.map((row) => row[i]));
        // return new Proxy(this._matrix, {
        //     get: (target, prop) => {
        //         const i = Number(prop);
        //         const col: number[] = [];

        //         for (const row of target) {
        //             col.push(row[i]);
        //         }

        //         return col;
        //     },
        // });
    }
}
