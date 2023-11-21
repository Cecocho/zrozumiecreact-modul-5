import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { Panel } from "./components/Panel/Panel";

function App() {
  const [isPanelShown, setIsPanelShown] = useState(true);

  return (
    <main className={styles.main}>
      <Button
        onClick={() => {
          setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown);
        }}
      >
        {isPanelShown ? "Schowaj panel" : "Pokaź panel"}
      </Button>
      {isPanelShown && <Panel />}
    </main>
  );
}

export default App;
