export function steps(count: number, step: number = 0): number {
  if (count <= 0) throw new Error("Only positive integers are allowed");
  if (!Number.isInteger(count)) throw new Error("Only positive integers are allowed");
  
  if (count === 1) return step;

  if (count % 2 === 0) {
    return steps(count / 2, step + 1);
  } else return steps((count * 3 ) + 1, step + 1);
}
