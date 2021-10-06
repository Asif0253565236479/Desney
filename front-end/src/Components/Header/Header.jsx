import styled from "styled-components";

export default function Header() {
    return (
        <Nav>
            <Logo>
                <h2>Desney+</h2>
            </Logo>
            <Navemenu>
                <a href="/home">
                    <i className="fas fa-home"></i>
                    HOME
                </a>
                <a href="/search">
                    <i className="fas fa-search"></i>
                    SEARCH
                </a>
                <a href="/watchlist">
                    <i className="fas fa-plus"></i>
                    WATCHLIST
                </a>
                <a href="/original">
                    <i className="fas fa-star"></i>
                    ORIGINAL
                </a>
                <a href="/movies">
                    <i className="fas fa-film"></i>
                    MOVIES
                </a>
                <a href="/serise">
                    <i className="fas fa-tv"></i>
                    SERISE
                </a>
            </Navemenu>
        </Nav>
    )
}


const Nav = styled.nav`
position: fixed;
top: 0;
height: 70px;
z-index:3;
background: #090b13;
display: flex;
align-items: center;
width: 100%;
padding: 0 36px;
justify-content: space-between;
letter-spacing: 15px;
`;

const Logo = styled.div`

`;

const Navemenu = styled.div`
margin-right: auto;
margin-left:20px;
display: flex;
flex-direction: inline-block;
position: relative;

 @media (max-width: 768px){
     display: none;
 }

 a{
     letter-spacing:1px;
     margin: 0 10px;
     padding-bottom: 2px;

     i{
         padding-right: 4px
     }
 }
 a:hover{
     //
 }

`;