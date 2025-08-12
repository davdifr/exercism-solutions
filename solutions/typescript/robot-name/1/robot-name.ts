export class Robot {
    private static alreadyGenerated = new Set<string>();

    private static chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private _name: string;

    constructor() {
        this._name = Robot.releaseNames();
    }

    public get name(): string {
        return this._name;
    }

    public resetName(): void {
        this._name = '';

        this._name = Robot.releaseNames();
    }

    public static generateName(): string {
        let name = '';

        // two uppercase letters
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * this.chars.length);

            name += Robot.chars[randomIndex];
        }

        // three digits
        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            name += randomNumber;
        }

        return name;
    }

    public static releaseNames(): string {
        let name = Robot.generateName();

        // Ensure the name is unique
        while (Robot.alreadyGenerated.has(name)) {
            name = Robot.generateName();
        }

        Robot.alreadyGenerated.add(name);
        return name;
    }
}
