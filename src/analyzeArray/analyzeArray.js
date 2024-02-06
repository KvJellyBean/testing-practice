export default function analyzeArray(array) {
  if (typeof array !== "object") return "Not an array.";
  if(!array.every(element => typeof element === 'number')) return "Not all array's member is a number.";

  return {
    average: array.reduce((acc, cur) => acc + cur, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
