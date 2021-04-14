import { Button, Typography } from "@material-ui/core";
import React from "react";
import styles from './Description.module.scss'

export const Description = ({isNextPossible, handleNextStep}) => {
  return (
    <div>
              <Typography  variant="h5" gutterBottom >
        Value Assessment
      </Typography>
      <p>
        On the Princessipality of Tarbat, everyone's constitutions is based on
        three core values that the individual finds most important to an ethical
        and happy life. To find out what exacty these values are, every citizen
        has to undertake a test that usually lasts around 2 hours. The following
        is a shortened version consisting of an algorithm that lets you choose
        and compare your own values - it won't take you longer than 5 minutes to
        find out which values are vital to you!
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
