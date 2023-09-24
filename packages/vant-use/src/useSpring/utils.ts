import { SpringConfig } from './config';

export const now =
  typeof performance !== 'undefined'
    ? performance.now.bind(performance)
    : Date.now.bind(Date);

export const isArray = Array.isArray.bind(Array);

const reusedTuple: [number, number] = [0, 0];
export function stepper(
  secondPerFrame: number,
  x: number,
  v: number,
  destX: number,
  spring: SpringConfig,
): [number, number] {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  const Fspring = -spring.tension * (x - destX);

  // Damping, in kg / s
  const Fdamper = -spring.friction * v;

  const a = (Fspring + Fdamper) / (spring.mass || 1);

  const newV = v + a * secondPerFrame;
  const newX = x + newV * secondPerFrame;

  const precision = spring.precision || 0.01;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;

  return reusedTuple;
}
