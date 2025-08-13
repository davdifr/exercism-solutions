export class Clock {
    private _hour: number = 0;
    private _minute: number = 0;
    private _exceeds: number = 0;
    private _clock: string = '';

    constructor(hour: number, minute?: number) {
        if (minute) {
            this._exceeds += Math.floor(minute / 60) % 24;
            if (minute >= 0) this._minute = minute % 60;
            else this._minute = 60 + (minute % 60);
        }

        this._hour = (24 + ((hour + this._exceeds) % 24)) % 24;

        this._clock = `${String(this._hour).padStart(2, '0')}:${String(this._minute).padStart(2, '0')}`;
    }

    public toString() {
        return this._clock;
    }

    public plus(minutes: number): Clock {
        return new Clock(this._hour, this._minute + minutes);
    }

    public minus(minutes: number): Clock {
        return new Clock(this._hour, this._minute - minutes);
    }

    public equals(other: Clock): boolean {
        return this._clock === other.toString();
    }
}
