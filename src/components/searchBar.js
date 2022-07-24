import styled from "styled-components";

const Search = () => {
  return <StyledInput value="asd"></StyledInput>;
};

const StyledInput = styled.input`
  width: 68%;
  background-color: #202124;
  border: 1px solid rgba(189, 193, 198, 0.523);
  border-radius: 100px;
  height: 40px;
  padding: 0px 10px 0px 10px;
  color: #fff;
  margin-top: 30px;
  max-width: 580px;
`;

export default Search;
