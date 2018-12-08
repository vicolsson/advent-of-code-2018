const solvePuzzle = (input) => {
  let coords = input
    .split('\n')
    .map(row => {
      const [ x, y ] = row.split(', ');
      return { x: Number.parseInt(x), y: Number.parseInt(y), size: 0 };
    });

  const { minX, maxX, minY, maxY } = getMaxMinCoords(coords);

  let res = 0;
  for (let x = minX; x < maxX; x++) {
    for (let y = minY; y < maxY; y++) {

      const distanceScore = getDistanceScore({ x, y }, coords);
      if (distanceScore < 10000) res++;
    }
  }
  
  return res;
}

const getMaxMinCoords = (coords) => {
  coords.sort((a, b) => {
    return a.x - b.x;
  });
  const minX = coords[0].x;
  const maxX = coords[coords.length - 1].x;
  
  coords.sort((a, b) => {
    return a.y - b.y;
  });
  const minY = coords[0].y;
  const maxY = coords[coords.length - 1].y;

  return {
    minX,
    maxX,
    minY,
    maxY
  };
}

const getDistanceScore = (searchCoord, coords) => {
  return coords.reduce((acc, curr) => {
    return acc + calculateDistanceBetweenCoords(searchCoord, curr);
  }, 0);
}

const calculateDistanceBetweenCoords = (coord1, coord2) => {
  return Math.abs(coord1.x - coord2.x) + Math.abs(coord1.y - coord2.y);
}

const CORRECT_ANSWER = 46966;
const INPUT = `353, 177
233, 332
178, 231
351, 221
309, 151
105, 289
91, 236
321, 206
156, 146
94, 82
81, 114
182, 122
81, 153
319, 312
334, 212
275, 93
224, 355
347, 94
209, 65
118, 172
113, 122
182, 320
191, 178
99, 70
260, 184
266, 119
177, 178
313, 209
61, 285
155, 218
354, 198
274, 53
225, 138
228, 342
187, 165
226, 262
143, 150
124, 159
325, 210
163, 176
326, 91
170, 193
84, 265
199, 248
107, 356
45, 340
277, 173
286, 44
242, 150
120, 230`;

const startDate = new Date();
const result = solvePuzzle(INPUT);
console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === CORRECT_ANSWER ? 'Test success' : 'Test fail');
console.log('Run time:', (new Date() - startDate)/1000, 'seconds');
console.log('\n---------------------');
