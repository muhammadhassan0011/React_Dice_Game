/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function RoleDice({ currDice, roleDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./dice_${currDice}.png`} alt={`Dice showing ${currDice}`} />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  /* border: 2px solid blue; */
  width: fit-content;
  margin: 0 auto;

  .dice {
    width: 130px;
    height: 130px;
    cursor: pointer;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
