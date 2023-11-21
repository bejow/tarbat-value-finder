import { Button, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Description.module.scss";

export const Description = ({ isNextPossible, handleNextStep }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Entdecke deine inneren Werte!
      </Typography>
      <p>
        Unser kurzer und interaktiver Test hilft dir dabei, deine persönlichen
        Werte zu erkunden. Finde heraus, was dir im Leben wirklich wichtig ist
        und erhalte wertvolle Einblicke in deine eigenen Überzeugungen und
        Prioritäten. Tauche ein und lerne mehr über dich selbst – starte jetzt
        unseren Werte-Test!
      </p>
      <div className={styles.buttonContainer}>
        <Button
          onClick={handleNextStep}
          className={styles.button}
          variant="contained"
          color="primary"
        >
          Start
        </Button>
      </div>
    </div>
  );
};
