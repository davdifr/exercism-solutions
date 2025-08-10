export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }


  public static generateAbilityScore(): number {
    // let min = 6;
    // let current = 0;
    // let total = 0;

    // for (let i = 0; i < 4; i++) {
    //   current = Math.floor(Math.random() * 6) + 1;

    //   if (current < min) min = current;
    //   total += current;
    // }

    // return total -= min;

    const rollFn = () => Math.floor(Math.random() * 6) + 1;

    const rolls = Array.from({length: 4}, () => rollFn());

    const [a, b, c] = rolls.sort((a, b) => b - a);

    return a + b + c;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
