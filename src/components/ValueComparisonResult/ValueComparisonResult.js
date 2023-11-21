import { Button } from "@material-ui/core";
import React from "react";
import styles from "./ValueComparisonResult.module.scss";
const ValueComparisonResult = ({ situation, sortedValues }) => {
  return (
    <div>
      <p>        Für Dein Thema dienen Dir folgende 3 Werte als Ausrichtung und
        Orientierung:{" "}</p>
      {sortedValues
        ? sortedValues.slice(0, 3).map((value, index) => (
            <p key={`${index}#${value}`} className="value">
              {index + 1}. {value.value}
            </p>
          ))
        : null}
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {
            window.location.reload();
            return false;
          }}
          className={styles.button}
          variant="contained"
          color="primary"
        >
          Start Again
        </Button>
      </div>
    </div>
  );
};

export default ValueComparisonResult;
