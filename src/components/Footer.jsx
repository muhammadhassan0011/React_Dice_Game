import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      &copy; This Game is Maid By Syed Muhammad Hassan
    </FooterContainer>
  );
}

const FooterContainer = styled.p`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: gray;
  font-size: 0.7rem;
`;
