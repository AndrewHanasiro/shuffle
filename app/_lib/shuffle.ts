import { Card, ShuffleType, numberArray, suitsArray } from "./entities";

export async function shuffle(
  type: ShuffleType,
  currentOrder?: Card[]
): Promise<Card[]> {
  switch (type) {
    case "order":
      return order();

    case "random":
      return random(currentOrder);

    default:
      throw new Error("Type of shuffle not acceptable");
  }
}

// Create an ordered deck
function order(): Card[] {
  return suitsArray.reduce((output, current) => {
    const list = numberArray.map(
      (el) =>
        ({
          number: el,
          suit: current,
        } as Card)
    );
    return [...output, ...list];
  }, [] as Card[]);
}

// Fisher–Yates shuffle (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
function random(currentOrder?: Card[]): Card[] {
  let list: Card[] = currentOrder ? [...currentOrder] : order();
  for (let i = list.length - 1; i >= 0; i--) {
    const index = Math.floor(Math.random() * i);
    const temp = list[i];
    list[i] = list[index];
    list[index] = temp;
  }
  return list;
}
