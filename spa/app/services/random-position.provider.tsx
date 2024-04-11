import { getRandomArbitrary } from "./random-number-arbitrary.provider";
import useDisplaySize from "./window-size.provider";

export function getRandomPosition(height: number, width: number) {
  var x = 0;
  var y = 0;

  y = getRandomArbitrary(height * 1.2, height * 2);
  x = getRandomArbitrary(-width * 2, width * 3);
  console.log(x, y, "ESSA");
  return { x, y };
}
