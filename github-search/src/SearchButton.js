import styled from "styled-components";
import img1 from './images/icon-search.svg';

const Wrapper = styled.div`
    margin-top: 10%;
    width: 94%;
    background-color: ${Props => Props.theme.boxColor};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 6px;
    justify-content: space-between;
    transition: all 0.5s ease;
  `;

const UserInput = styled.input`
    flex: .9;
    border: none;
    background-color: ${Props => Props.theme.boxColor};
    transition: all 0.5s ease;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: ${Props => Props.theme.tagLineColor};
  }
`;

const SearchIcon = styled.img`
    width: 20px;
    height: auto;
    margin-left: 3%;
`;

const Press = styled.button`
    width: 30%;
    height: auto;
    padding: 5%;
    background-color: #0079FF;
    border-radius: 10px;
    color: white;
    border: none;
  `;
  
function Search() {

  return (
    <Wrapper>
      <SearchIcon src= {img1} />
      <UserInput type='text' placeholder="Search GitHub username..." />
      <Press>
        Search
      </Press>
     </Wrapper>

  );
}

export default Search;