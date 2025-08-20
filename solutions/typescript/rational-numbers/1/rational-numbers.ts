import exp from 'constants';

export class Rational {
    public numerator: number;
    public denominator: number;

    constructor(num: number, den: number) {
        this.numerator = num;
        this.denominator = den;

        this.reduce();
    }

    add(other: Rational): Rational {
        const n1 = this.numerator;
        const d1 = this.denominator;

        const n2 = other.numerator;
        const d2 = other.denominator;

        const newNumerator = n1 * d2 + n2 * d1;
        const newDenominator = d1 * d2;

        return new Rational(newNumerator, newDenominator);
    }

    sub(other: Rational): Rational {
        const n1 = this.numerator;
        const d1 = this.denominator;

        const n2 = other.numerator;
        const d2 = other.denominator;

        const newNumerator = n1 * d2 - n2 * d1;
        const newDenominator = d1 * d2;

        return new Rational(newNumerator, newDenominator);
    }

    mul(other: Rational): Rational {
        const n1 = this.numerator;
        const d1 = this.denominator;

        const n2 = other.numerator;
        const d2 = other.denominator;

        const newNumerator = n1 * n2;
        const newDenominator = d1 * d2;

        return new Rational(newNumerator, newDenominator);
    }

    div(other: Rational): Rational {
        const n1 = this.numerator;
        const d1 = this.denominator;

        const n2 = other.numerator;
        const d2 = other.denominator;

        if (n2 === 0) throw new Error('');

        const newNumerator = n1 * d2;
        const newDenominator = n2 * d1;

        return new Rational(newNumerator, newDenominator);
    }

    abs(): Rational {
        this.numerator = Math.abs(this.numerator);
        this.denominator = Math.abs(this.denominator);

        return this;
    }

    exprational(num: number): Rational {
        if (num === 0) return new Rational(1, 1);

        const absNum = Math.abs(num);

        const newNumerator = this.numerator ** absNum;
        const newDenominator = this.denominator ** absNum;

        if (num > 0) {
            return new Rational(newNumerator, newDenominator);
        } else return new Rational(newDenominator, newNumerator);
    }

    expreal(num: number): number {
        const n1 = this.numerator;
        const d1 = this.denominator;

        const absN1 = Math.abs(n1);
        const result = (num ** (1 / d1)) ** absN1;

        if (n1 > 0) return result;
        else return 1 / result;
    }

    reduce() {
        // For example, 3/-4 should be reduced to -3/4
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }

        const n1 = this.numerator;
        const d1 = this.denominator;

        const gcd = this._gcd(n1, d1);

        this.numerator = this.numerator / gcd;
        this.denominator = this.denominator / gcd;

        if (this.numerator === 0) {
            this.denominator = 1;
        }

        return this;
    }

    private _gcd(a: number, b: number): number {
        let absA = Math.abs(a);
        let absB = Math.abs(b);

        while (absB !== 0) {
            const remainder = absA % absB;

            absA = absB;
            absB = remainder;
        }

        return absA;
    }
}
