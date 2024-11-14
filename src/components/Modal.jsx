/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../styled/Button";

export default function Modal({ showModal, message, emoji, playAgain }) {
  return (
    <ModalContainer className={showModal ? "show" : ""}>
      <div className="content">
        <img src={`./${emoji}.gif`} alt="GIF" />
        <h1>{message}</h1>
        <Button onClick={playAgain}>PLAY AGAIN</Button>
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  /* -------- game MODAL ----------------------- */
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;

  &.show {
    opacity: 1;
    pointer-events: auto;
  }

  .content {
    border: 2px solid blue;
    padding: 3rem 5rem;
    border-radius: 10px;
    background-color: #ffff;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;

    & img {
      height: 28vh;
    }
    & .play-again {
      padding: 12px 23px;
      cursor: pointer;
    }
    & h1 {
      font-size: 2rem;
      text-shadow: 0 2px 3px #c98282;
    }
  }

  /*  GAME MODEL RESPONSIVE : ------------ */
  @media (max-width: 780px) {
    height: 105vh;

    .content {
      padding: 1.7rem 3rem;
      border-radius: 10px;

      & img {
        height: 14vh;
      }
      & .play-again {
        padding: 10px 18px;
      }
      & h1 {
        font-size: 1.7rem;
      }
    }
  }
`;
