"use client";

import { useEffect, useState, Suspense } from "react";

import { Button } from "@/components/Button";
import { CardDeck } from "@/components/CardDeck";

import { Card } from "./_lib/entities";
import { shuffle } from "./_lib/shuffle";
import styles from "./page.module.scss";

export default function Home() {
  const [cardList, setCardList] = useState([] as Card[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const list = await shuffle("order");
        setCardList(list);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  async function submit() {
    const list = await shuffle("random", cardList);
    setCardList(list);
  }

  async function reset() {
    const list = await shuffle("order");
    setCardList(list);
  }

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading feed...</p>}>
        <CardDeck deck={cardList} />
      </Suspense>
      <div className={styles.button_group}>
        <Button onClick={submit} loading={loading}>
          SHUFFLE
        </Button>
        <Button onClick={reset} loading={loading}>
          RESET
        </Button>
      </div>
    </main>
  );
}
