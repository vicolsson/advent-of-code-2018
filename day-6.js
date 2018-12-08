const solvePuzzle = (input) => {
  let coords = input
    .split('\n')
    .map(row => {
      const [ x, y ] = row.split(', ');
      return { x: Number.parseInt(x), y: Number.parseInt(y), size: 0 };
    });

  for (let x = -1000; x < 1000; x++) {
    for (let y = -1000; y < 1000; y++) {

      const nearestCoord = getNearestCoordsInList({ x, y }, coords);
      if (nearestCoord.length === 1) nearestCoord[0].size++;

    }
  }
  
  return coords.filter(c => c.size < 10000).sort((a, b) => {
    return b.size - a.size;
  })[0].size;
}

const getNearestCoordsInList = (searchCoord, coords) => {
  let nearestCoords = [], nearestDistance = 99999999;
  let i = coords.length - 1;
  while (i--) {
    const distance = calculateDistanceBetweenCoords(searchCoord, coords[i]);
    
    if (distance === nearestDistance) {
      nearestCoords.push(coords[i]);
    }
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestCoords = [coords[i]];
    }
  }
  return nearestCoords;
}

const calculateDistanceBetweenCoords = (coord1, coord2) => {
  return Math.abs(coord1.x - coord2.x) + Math.abs(coord1.y - coord2.y);
}

const CORRECT_ANSWER = 4829;
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
