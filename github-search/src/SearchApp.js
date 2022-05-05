import styled from "styled-components";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";

function Search(Props) {
    function changeTheme() {
        if (Props.theme === "light") {
            Props.setTheme("dark");
        } else {
            Props.setTheme("light");
        }
    };

    const Toggle = styled.button`
        cursor: pointer;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: none;
        background-color: ${Props => Props.theme.pageBackground};
        transition: all .5s ease;
    `;

    const Page = styled.div`
        background-color: ${Props => Props.theme.pageBackground};
        transition: all .5s ease;
        height: 100vh;
        width: 100%;
    `;

    const Container = styled.div`
        display: grid;
    
        
    `;

    const Title = styled.h1`
        color: ${Props => Props.theme.titleColor};
        transition: all .5s ease;
    `;




    const icon = Props.theme === "light" ? <img src={moon} alt="moon-icon"/> : <img src= {sun} alt="sun-icon"/>; 

    return (
        <Page>
            <Container>
                <Title>
                    devfinder
                    <Toggle onClick={changeTheme}>
                        {icon}
                    </Toggle>
                </Title>
                
            </Container>
        </Page>
    );
};

export default Search;