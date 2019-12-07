export function createValidationZones() {
  const validationZones = [];

  for (let j = 0; j < 9; j += 1) {
    const horz = [];
    const vert = [];

    for (let k = 0; k < 9; k += 1) {
      horz.push({ x: j, y: k });
      vert.push({ x: k, y: j });
    }

    validationZones.push(horz);
    validationZones.push(vert);
  }

  for (let j = 0; j < 9; j += 3) {
    for (let k = 0; k < 9; k += 3) {
      const sq = [];

      for (let y = 0; y < 3; y += 1) {
        for (let x = 0; x < 3; x += 1) {
          sq.push({ x: k + x, y: j + y });
        }
      }

      validationZones.push(sq);
    }
  }

  return validationZones;
};
