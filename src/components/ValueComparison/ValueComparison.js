import React, { useState, useEffect } from "react";
import styles from "./ValueComparison.module.scss";

const ValueComparison = ({ values, handleValuesSorted }) => {
  const [state, setState] = useState(
    values.map((value) => ({ value, priority: 0 }))
  );

  const selectNextPair = () => {
    for (
      let currentPriority = 0;
      currentPriority < state.length;
      currentPriority++
    ) {
      var samePriority = [];
      for (let index = 0; index < state.length; index++) {
        var value = state[index];

        if (samePriority.length > 1) return samePriority;
        if (currentPriority === value.priority) {
          samePriority.push({ ...value, index });
        }
      }
      if (samePriority.length > 1) return samePriority;
    }
    return false;
  };
  
  var nextPair;
  nextPair = selectNextPair();

  useEffect(() => {
    if (nextPair === false) {
      handleValuesSorted([...state].sort((a, b) => b.priority - a.priority));
    }
  }, [state, nextPair, handleValuesSorted]);
  
  

  const handleClick = (value) => {
    var newState = [...state];
    newState[value.index].priority = value.priority + 1;
    setState(newState);
  };

  console.log(state);
  console.log(selectNextPair());


  return (
    <div>
      <p>
        You will be shown two values: pick the one that is more important to
        you. Don't think about it for long and just follow your intuition!
      </p>
      <div className={styles.compareContainer}>
        <p>Which value is more important to you?</p>
        <div className={styles.valueContainer}>
          <p onClick={() => handleClick(nextPair[0])} className={styles.value}>
            {nextPair ? nextPair[0].value : null}
          </p>
          <p onClick={() => handleClick(nextPair[1])} className={styles.value}>
            {nextPair ? nextPair[1].value : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueComparison;
