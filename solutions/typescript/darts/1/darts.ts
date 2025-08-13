export const OUTER_RADIUS = 10;
export const MIDDLE_RADIUS = 5; 
export const INNER_RADIUS = 1; 

export function score(x: number, y: number): number {
  const radius = distanceFromOrigin(x, y);
  
  if (radius <= INNER_RADIUS) return 10;
  if (radius <= MIDDLE_RADIUS) return 5;
  if (radius <= OUTER_RADIUS) return 1;

  return 0;
}

export function distanceFromOrigin(x: number, y: number) {
  return (x**2 + y**2) ** (1/2);
}