import styled from 'styled-components'

const Header = styled.div`
background: orange;
color: white;
height: 80px;
display: flex;
align-items: center;
font-size: 1.2rem;
h1 {
    justify-self: start;
    padding-left: 50px;
}

`

const NavbarStyled = styled.div`
ul {
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    padding-left: 25px;
    padding-right: 25px;
    list-style-type: none;
}
li {
    padding: 8px;
    text-transform: uppercase;
    color: white;
    min-width: 80px;
    margin: auto;
    list-style-type: none;

}
`

export {
    NavbarStyled, Header
}