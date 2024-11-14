import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
// IMPORTING COMPONENTS FOR GamePlay : >
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import TotalScore from "./TotalScore";
import Modal from "./Modal";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";

// Logics _______________

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currDice, setCurrDice] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [error, setError] = useState("");
  const [emoji, setEmoji] = useState("");

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number yet!");
      return;
    }

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setCurrDice(randomNum);

    if (randomNum === selectedNumber) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setShowModal(false);
  };

  const playAgain = () => {
    setScore(0);
    setShowModal(false);
    setCurrDice(1);
    setSelectedNumber(undefined);
  };

  // Show the modal with a win or lose message based on the score
  useEffect(() => {
    if (score > 10) {
      setModalMessage("Congratulations! You Win!");
      setEmoji("victory");
      setShowModal(true);
    } else if (score < -10) {
      setModalMessage("Try Again! You Lose!");
      setEmoji("lost");
      setShowModal(true);
    } else {
      setShowModal(false); // Hide modal if score is between -10 and 10
    }
  }, [score]);

  return (
    <MainContainer>
      <Modal
        showModal={showModal}
        message={modalMessage}
        emoji={emoji}
        playAgain={playAgain}
      />

      <div className="top_section">
        <TotalScore score={score} />

        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>

      <RoleDice currDice={currDice} roleDice={rollDice} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
      <Footer />
    </MainContainer>
  );
};

export default GamePlay;

// _____________ : Styled Components : ________________ >
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* padding-top: 1.2rem; */
  /* border: 2px solid red; */
  height: 100vh;
  width: 100%;

  .top_section {
    display: flex;
    justify-content: space-around;
    /* border: 2px solid red; */
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
    margin: 0 auto;
  }
`;
