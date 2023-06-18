export type ShuffleType = "order" | "random";

// Card Suit
export const suitsArray = ["S", "H", "C", "D"] as const;
export type CardSuit = (typeof suitsArray)[number];

// Card Number
export const numberArray = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
] as const;
export type CardNumber = (typeof numberArray)[number];

// Card
export type Card = {
  number: CardNumber;
  suit: CardSuit;
};
