export class GradeSchool {
    private _roster: Record<number, string[]>;

    constructor() {
        this._roster = {};
    }

    roster() {
        // Return a copy instead
        const rosterCopy: Record<number, string[]> = {};

        for (const key of Object.keys(this._roster)) {
            rosterCopy[Number(key)] = [...this._roster[Number(key)]];
        }

        return rosterCopy;
    }

    add(name: string, grade: number) {
        // Remove name from other grades
        Object.keys(this._roster).forEach((key) => {
            const gradeLevel = Number(key);
            if (gradeLevel !== grade) {
                this._roster[gradeLevel] = this._roster[gradeLevel].filter(
                    (n) => n !== name
                );
            }
        });

        // Grade not initialized
        if (!this._roster[grade]) this._roster[grade] = [];

        // Name not already in grade
        if (!this._roster[grade].includes(name)) {
            this._roster[grade].push(name);

            this._roster[grade].sort();
        }
    }

    grade(value: number): string[] {
        return [...(this._roster[value] ?? [])];
    }
}
