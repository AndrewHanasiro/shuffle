"use client";

import { CardNumber, CardSuit } from "@/app/_lib/entities";
import styles from "./card.module.scss";

type CardProps = {
  number: CardNumber;
  suit: CardSuit;
};

function getSuitImage(number: CardNumber, suit: CardSuit) {
  switch (suit) {
    case "S":
      return <span className={styles.black}>{number}&spades;</span>;
    case "C":
      return <span className={styles.black}>{number}&clubs;</span>;
    case "H":
      return <span className={styles.red}>{number}&hearts;</span>;
    case "D":
      return <span className={styles.red}>{number}&diams;</span>;
    default:
      break;
  }
}
export function Card({ number, suit }: CardProps) {
  return <div className={styles.card}>{getSuitImage(number, suit)}</div>;
}
