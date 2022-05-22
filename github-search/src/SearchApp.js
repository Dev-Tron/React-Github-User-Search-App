import styled from "styled-components";
import Sun from "./images/icon-sun.svg";
import Moon from "./images/icon-moon.svg";
import Data from "./SearchData";
import { createGlobalStyle } from 'styled-components';


    const GlobalStyle = createGlobalStyle`
      body {
        background: ${Props => Props.theme.pageBackground};
        transition: all 0.5s ease;
        font-family: 'Space Mono', monospace;
        padding: 5%;
  }
`
    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    `;

    const Headers = styled.header`
        display: flex;
    `

    const Title = styled.h1`
        color: ${Props => Props.theme.titleColor};
        font-size: xx-large;
        transition: all 0.5s ease;
        
    `;

    const Toggle = styled.button`
        margin-top: 10%;
        margin-left: 1%;
        cursor: pointer;
        border-radius: 50%;
        border: none;
        background-color: ${Props => Props.theme.pageBackground};
        &:focus {
        outline: none;
        transition: all 0.5s ease;

        
        }
    `;

    const Label = styled.label`
        font-size: small;
        color: ${Props => Props.theme.titleColor};
        letter-spacing: 2px;
        margin-top: 20%;
        margin-left: 39%;
        transition: all 0.5s ease;
    `;

    function Switch(Props) {
        function changeTheme() {
            if (Props.theme === "light") {
                Props.setTheme("dark");
            } else {
                Props.setTheme("light");
            }
        };

    const icon = Props.theme === "light" ? <img src={Moon} /> : <img src={Sun} />;
   

    return (

            <Container>
                <GlobalStyle />
                    <Headers>
                        <Title>
                            devfinder
                        </Title>
                        <Label>
                            {Props.theme === "light" ? "DARK" : "LIGHT"}
                        </Label>
                        <Toggle onClick={changeTheme}>
                            {icon}
                        </Toggle>
                    </Headers>
                <Data  />
            </Container>
    );
};

export default Switch;
