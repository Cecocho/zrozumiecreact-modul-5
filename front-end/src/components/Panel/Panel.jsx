import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleLoadClick();
  }, []);

  useEffect(() => {
    console.log("dupa!");
  }, []);

  function handleLoadClick() {
    setIsLoading(true);
    fetch("http://localhost:3000/words")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }
  return isLoading ? (
    <p>Ładowanie gówna ziomeczQu</p>
  ) : (
    <>
      <section className={styles.section}>
        <List data={data}></List>
      </section>
    </>
  );
}
