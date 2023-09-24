export interface SpringConfig {
  /**
   * Mass of the spring
   */
  mass?: number;
  /**
   * Spring energetic load. Also called stiffness
   */
  tension: number;
  /**
   * Spring resistance.
   */
  friction: number;
  /**
   * The higher the precision, the more smooth and slow to compute the animation
   * will be. By default 0.01 is a good value, but can be decreased to 0.1 in
   * some scenarios for performance.
   */
  precision?: number;
}

// the default, if nothing provided
export const noWobble: SpringConfig = {
  mass: 1,
  tension: 170,
  friction: 26,
  precision: 0.01,
};

export const gentle: SpringConfig = {
  mass: 1,
  tension: 120,
  friction: 14,
  precision: 0.01,
};

export const wobbly: SpringConfig = {
  mass: 1,
  tension: 180,
  friction: 12,
  precision: 0.01,
};

export const stiff: SpringConfig = {
  mass: 1,
  tension: 210,
  friction: 20,
  precision: 0.01,
};

export const springConfig = { noWobble, gentle, wobbly, stiff };
