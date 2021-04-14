import "./App.css";
import { useState } from "react";
import ValueComparisonResult from "./components/ValueComparisonResult/ValueComparisonResult";
import ValueComparison from "./components/ValueComparison/ValueComparison";
import SituationValueSelection from "./components/SituationValueSelection/SituationValueSelection";
import { LayoutWrapper } from "./components/LayoutWrapper/LayoutWrapper";
import styles from "./App.module.scss";
import { Description } from "./components/Description/Description";

function App() {
  const [state, setState] = useState({
    step: -1,
    situationValues: [],
    sortedSituationValues: [],
  });
  const { step, situationValues, sortedSituationValues } = state;

  const handleValueChange = (e) => {
    var newValues = [...situationValues];
    const { checked, name } = e.target;
    if (checked && situationValues.length < 8) {
      newValues.push(name);
    } else if (!checked) {
      newValues = situationValues.filter((item) => item !== name);
    }
    console.log(newValues);
    setState({ ...state, situationValues: newValues });
  };

  const handleNextStep = () => {
    setState({ ...state, step: (step + 1) % 3 });
  };

  const handlePreviousStep = () => {
    if (step === 0) {
      return;
    }
    setState({ ...state, step: step - 1 });
  };

  const isNextPossible = () => {
    if (step === 0) {
      return situationValues.length > 4;
    }
    return true;
  };

  const renderStep = () => {
    switch (step) {
      case -1:
        return (
          <Description handleNextStep={handleNextStep}/>
        )
      case 0:
        return (
          <SituationValueSelection
            handleValueChange={handleValueChange}
            situationValues={situationValues}
            isNextPossible={isNextPossible}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 1:
        return (
          <ValueComparison
            values={situationValues}
            handleValuesSorted={(sortedValues) =>
              setState({
                ...state,
                sortedSituationValues: sortedValues,
                step: 2,
              })
            }
          />
        );
      case 2:
        return <ValueComparisonResult sortedValues={sortedSituationValues} />;
      default:
        return (
          <Description handleNextStep={handleNextStep}/>
        )
    }
  };

  return (
    <LayoutWrapper>
      {renderStep()}

      <div className={styles.buttonContainer}>

        
      </div>
    </LayoutWrapper>
  );
}

export default App;
