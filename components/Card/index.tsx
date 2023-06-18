"use client";

import { CSSProperties } from "react";

import { CardNumber, CardSuit } from "@/app/_lib/entities";

import style from "./card.module.scss";

type CardProps = {
  position: number;
  number: CardNumber;
  suit: CardSuit;
  isExtended: boolean;
};

function getBlackOrRed(suit: CardSuit) {
  switch (suit) {
    case "S":
    case "C":
      return `${style.card} ${style.black}`;
    case "H":
    case "D":
      return `${style.card} ${style.red}`;
    default:
      break;
  }
}

function getSuitImage(suit: CardSuit) {
  switch (suit) {
    case "S":
      return <>&spades;</>;
    case "C":
      return <>&clubs;</>;
    case "H":
      return <>&hearts;</>;
    case "D":
      return <>&diams;</>;
    default:
      break;
  }
}

export function Card({ position, number, suit, isExtended }: CardProps) {
  const inlineStyle: CSSProperties | undefined = isExtended
    ? undefined
    : {
        marginTop: position > 0 ? "-160px" : 0,
        transform: `translateX(${position * 25}px)`,
      };
  return (
    <div className={getBlackOrRed(suit)} style={inlineStyle}>
      <div className={style.card_left}>
        <span className={style.card_number}>{number}</span>
        {getSuitImage(suit)}
      </div>
      <div className={style.card_center__suit}>{getSuitImage(suit)}</div>
      <div className={style.card_right}>
        <span className={style.card_number}>{number}</span>
        {getSuitImage(suit)}
      </div>
    </div>
  );
}
