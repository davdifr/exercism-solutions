export function decodedValue(colors: string[]): number {
    return COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);
}

export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
