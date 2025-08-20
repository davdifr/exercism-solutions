// There’s a much cleaner and trickier approach using a Set with the size method
export class Triangle {
    private _a: number;
    private _b: number;
    private _c: number;
    private _ok: boolean;

    constructor(...sides: number[]) {
        const [a, b, c] = [...sides];

        this._a = a;
        this._b = b;
        this._c = c;

        this._ok = this._checkSides();
    }

    private _checkSides(): boolean {
        return (
            this._a + this._b >= this._c &&
            this._b + this._c >= this._a &&
            this._a + this._c >= this._b
        );
    }

    get isEquilateral(): boolean {
        if (this._a === 0 && this._b === 0 && this._c === 0) return false;

        return this._ok && this._a === this._b && this._a === this._c;
    }

    get isIsosceles(): boolean {
        return (
            this.isEquilateral ||
            (this._ok &&
                ((this._a === this._b && this._a !== this._c) ||
                    (this._a === this._c && this._a !== this._b) ||
                    (this._b === this._c && this._b !== this._a)))
        );
    }

    get isScalene() {
        return (
            this._ok &&
            this._a !== this._b &&
            this._a !== this._c &&
            this._b !== this._c
        );
    }
}
