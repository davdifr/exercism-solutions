export const colorCode = (color?: string): number | string[] => {
  if (!color) return COLORS;

  return COLORS.indexOf(color);
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
