"use client";

import { Card } from "@/components/Card";
import { Card as tCard } from "@/app/_lib/entities";

import styles from "./carddeck.module.scss";

type CardDeckProps = {
  deck: tCard[];
};

export function CardDeck({ deck }: CardDeckProps) {
  return (
    <div className={styles.carddeck}>
      {deck.map((c, index) => (
        <Card key={index} number={c.number} suit={c.suit} />
      ))}
    </div>
  );
}
