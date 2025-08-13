export function decodedResistorValue([arg0, arg1, arg2]: string[]): string {
  const mainValue = COLORS.indexOf(arg0) * 10 + COLORS.indexOf(arg1);   
  const numberOfZeros = 10**COLORS.indexOf(arg2);
  const result = mainValue * numberOfZeros;

  if (result === 0) return '0 ohms';

  if (result / 1_000_000_000 > 1) return result / 1_000_000_000 + ' gigaohms';
  if (result / 1_000_000 > 1) return result / 1_000_000 + ' megaohms';
  if (result / 1_000 > 1) return result / 1_000 + ' kiloohms';
  else return result + ' ohms'
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
