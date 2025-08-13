export const ONE_EARTH_YEAR_IN_SECONDS = 31_557_600;
export type Planets = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune";

export function age(planet: Planets, seconds: number): number {
  // const orbitalPeriods = new Map<Planets, number>([
  //   ['mercury', 0.2408467],
  //   ['venus', 0.61519726],
  //   ['earth', 1.0],
  //   ['mars', 1.8808158],
  //   ['jupiter', 11.862615],
  //   ['saturn', 29.447498],
  //   ['uranus', 84.016846],
  //   ['neptune', 164.79132],
  // ]);

  const orbitalPeriods: Record<Planets, number> = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1.0,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
  };

  // const age = seconds / (ONE_EARTH_YEAR_IN_SECONDS * orbitalPeriods.get(planet)!)
  const age = seconds / (ONE_EARTH_YEAR_IN_SECONDS * orbitalPeriods[planet])

  return Number(age.toFixed(2));
}



