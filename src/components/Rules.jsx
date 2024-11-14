import styled from "styled-components";

export default function Rules() {
  return (
    <RulesContainer>
      <h2>⭐ How to play dice🎲 game</h2>
      <div className="text">
        <p>🚨 Select any number</p>
        <p>💦 Click on dice🎲 image</p>
        <p>
          👉 After click on dice if selected number is equal to dice number you
          will get <b>same point as dice.</b>
        </p>
        <p>
          💀 IF you get wrong guess then <b>2 point</b> will be deducted.
        </p>
        <p>
          😱 IF the Total Score is Greater then <b>10 (you Win)</b>, & if
          Total-Score is Less then <b>-10 (You Lose)</b> .. THE GAME !
        </p>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 13px;
  /* margin-top: 40px; */
  border-radius: 10px;
  h2 {
    font-size: 1.2rem;
  }
  .text {
    font-size: 0.9rem;
    margin-top: 12px;
  }
`;
