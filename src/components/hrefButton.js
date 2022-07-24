import styled from "styled-components";

const HrefButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  height: 35px;
  color: #fff;
  margin: 0px 10px 0px 10px;
  padding: 0px 20px 0px 20px;
  background-color: #303134;
  border: 0px;
  border-radius: 3px;
  &:hover {
    cursor:pointer
  }
`;
export default HrefButton;
