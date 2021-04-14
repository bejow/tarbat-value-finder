import { Button } from "@material-ui/core";
import React from "react";
import styles from "./ValueComparisonResult.module.scss";
const ValueComparisonResult = ({ situation, sortedValues }) => {
  return (
    <div>
      <p>Here are your three core values:</p>
      {sortedValues
        ? sortedValues.slice(0, 3).map((value, index) => (
            <p key={`${index}#${value}`} className="value">
              {index + 1}. {value.value}
            </p>
          ))
        : null}
        <p>They form the basis for an amazing constitition! Please don't hesitate to contact our Foreign Office on +447591018928 to book your free citizenship test.</p>
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
