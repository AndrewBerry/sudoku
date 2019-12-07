export const MAX_PRNG_VALUE = 2147483646;

// Park-Miller PRNG
function nextPRNG(previousValue) {
  const positivePreviousValue = previousValue <= 0 ? previousValue + MAX_PRNG_VALUE : previousValue;
  return (positivePreviousValue * 16807) % 2147483647;
}

export function createPRNGGenerator(seed) {
  return function() {
    this.previousValue = this.previousValue || seed;

    const next = nextPRNG(seed);
    return next / MAX_PRNG_VALUE;
  };
}
