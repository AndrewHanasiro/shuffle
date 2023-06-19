"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Card as tCard } from "@/app/_lib/entities";

import styles from "./carddeck.module.scss";
import { useState } from "react";

type CardDeckProps = {
  deck: tCard[];
};

export function CardDeck({ deck }: CardDeckProps) {
  const [isExtended, setIsExtended] = useState(true);

  async function extend() {
    setIsExtended((old) => !old);
  }

  return (
    <>
      <div className={isExtended ? styles.carddeck_extended : styles.carddeck}>
        {deck.map((c, index) => (
          <Card
            key={index}
            position={index}
            number={c.number}
            suit={c.suit}
            isExtended={isExtended}
          />
        ))}
      </div>
      <Button onClick={extend} variant="arrow">
        &#8645;
      </Button>
    </>
  );
}
