import React from 'react'
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Movies from './pages/Movies/Movies'
import Shows from './pages/Shows/Shows'
import Home from './pages/Home/Home'
import styled, {createGlobalStyle, keyframes} from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const AnimationLogo = keyframes`
0%{
  transform: translate(-150px);
}

100%{
  transform: translate(0px);
}
`

const Header = styled.header`
width: 100%;
height: 13vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: black;
position: absolute;
z-index: 999;
position: fixed;
`
const LinkBox = styled.nav`
width: 35vw;
height: 5vh;
margin-left: 20%;
ul{
display: flex;
justify-content: space-evenly;
align-items: center; 
}
li{
  &:hover{
    color: red;
    transition: 1s;
  }
}
`
const TitleBox = styled.div`
border: solid;
animation: ${AnimationLogo} 3s ease-in-out;
h1{
  font-family: 'Bebas Neue', cursive;
  color: red;
  font-size: 3.5vw;
}

`

const SLink = styled(Link)`
list-style: none;
font-size: 1.7vw;
text-decoration: none;
font-family: 'Oswald', sans-serif;
font-weight: bolder;
color: white;
`

export default function App() {
  return (
   
    <Router>
       <GlobalStyle/>
    <Header>
      <TitleBox>
        <h1>MarlinFlix</h1>
      </TitleBox>
      
      <LinkBox>
       <ul>
         <SLink to ='/'><li>Home</li></SLink>
         <SLink to ='/shows'><li>Tv Shows</li></SLink>
         <SLink to ='/movies'><li>Top Movies</li></SLink>
       </ul>
      </LinkBox>
    </Header>
 

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/shows' element={<Shows/>}/>
    </Routes>

     
    </Router>
  )
}
