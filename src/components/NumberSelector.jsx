/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  function numSelectorHandler(value) {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>

      <div className="flex">
        {arrNumbers.map((value, i) => (
          <Box
            isselected={value === selectedNumber}
            key={i}
            onClick={() => numSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <div>
        <h3>Select Number</h3>
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: end;

  .error {
    color: red;
  }

  .flex {
    display: flex;
    gap: 0.7rem;
  }
`;

const Box = styled.span`
  padding: 10px 18px;
  border: 1px solid gray;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
