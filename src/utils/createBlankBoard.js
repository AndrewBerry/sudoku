export function createBlankBoard() {
  return Array.from(
    { length: 9 },
    () => Array.from(
      { length: 9 },
      () => ({
        value: null,
        candidates: {
          "1": false,
          "2": false,
          "3": false,
          "4": false,
          "5": false,
          "6": false,
          "7": false,
          "8": false,
          "9": false,
        },
      })
    )
  );
}
