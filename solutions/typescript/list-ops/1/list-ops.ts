export type NestedList<T> = T | List<NestedList<T>>;

export class List<T> {
    private _list: T[] = [];

    private constructor(...arr: T[]) {
        this._list = arr;
    }

    public static create<T>(...values: T[]): List<T> {
        return new List(...values);
    }

    public append(arr: List<T>): List<T> {
        return new List(...this._list, ...arr._list);
    }

    public concat(arr: NestedList<T>): List<T> {
        const result: T[] = [];

        const append = (item: NestedList<T>) => {
            if (item instanceof List) {
                for (let i = 0; i < item.length(); i++) append(item._list[i]);
            } else result.push(item);
        };

        append(arr);

        return new List(...this._list, ...result);
    }

    public filter(fn: (el: T) => boolean): List<T> {
        const result: T[] = [];

        for (let i = 0; i < this.length(); i++) {
            if (fn(this._list[i])) result.push(this._list[i]);
        }

        return new List(...result);
    }

    public map(fn: (el: T) => T): List<T> {
        const result: T[] = [];

        for (let i = 0; i < this.length(); i++) result.push(fn(this._list[i]));

        return new List(...result);
    }

    public foldl(fn: (acc: number, el: T) => number, acc: number): number {
        for (let i = 0; i < this.length(); i++) {
            acc = fn(acc, this._list[i]);
        }

        return acc;
    }

    public foldr(fn: (acc: number, el: T) => number, acc: number): number {
        for (let i = this.length() - 1; i >= 0; i--) {
            acc = fn(acc, this._list[i]);
        }

        return acc;
    }

    public reverse(): List<T> {
        const result: T[] = [];

        for (let i = this.length() - 1; i >= 0; i--) {
            result.push(this._list[i]);
        }

        return new List(...result);
    }

    public forEach(fn: (el: T) => void) {
        for (let i = 0; i < this.length(); i++) {
            fn(this._list[i]);
        }
    }

    public length(): number {
        let i = 0;
        for (; this._list[i]; i++) {}

        return i;
    }
}
