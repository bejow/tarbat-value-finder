import React from "react";
import styles from "./SituationValueSelection.module.scss";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { situationValues as values } from "../../constants/values";
import { shuffle } from "../../utils/utils";
import { Button } from "@material-ui/core";

const shuffledActionEmotions = shuffle(values);

const SituationValueSelection = ({
  handleValueChange,
  handleNextStep,
  isNextPossible,
  situationValues,
}) => {
  return (
    <div>
      <div>
        <FormControl>
          <p>
          Welche Werte bzw. Bedürfnisse sind 
            besonders wichtig für dich? Wähle zwischen 5 und 8 Begriffe aus der
            folgenden Liste. Lass Dich hier von Deinen Impulsen leiten und denk
            nicht zu lange drüber nach.{" "}
          </p>
          <div className={styles.formGroup}>
            <div>
              {shuffledActionEmotions.map((emotion) => {
                return (
                  <FormControlLabel
                    checked={
                      situationValues && situationValues.includes(emotion)
                    }
                    name={emotion}
                    className={styles.formLabel}
                    label={emotion}
                    onChange={(e) => handleValueChange(e)}
                    control={<Checkbox />}
                  />
                );
              })}
            </div>
          </div>
          <FormLabel>Bitte wähle zwischen 5 und 8 Begriffe aus!</FormLabel>
        </FormControl>

        <div className={styles.buttonContainer}>
          <Button
            onClick={handleNextStep}
            className={styles.button}
            variant="contained"
            color="primary"
            disabled={!isNextPossible()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SituationValueSelection;
