import React from 'react'
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Movies from './pages/Movies/Movies'
import Shows from './pages/Shows/Shows'
import Home from './pages/Home/Home'
import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Header = styled.header`
width: 100%;
height: 13vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: gray;
`
const LinkBox = styled.nav`
border: solid;
width: 20vw;
ul{
  display: flex;
  justify-content: space-evenly;
}
`
const TitleBox = styled.div`
h1{
  font-family: 'Bebas Neue', cursive;
  color: red;
  font-size: 3.5vw;
}

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
         <Link to ='/'><li>Home</li></Link>
         <Link to ='/shows'><li>Tv Shows</li></Link>
         <Link to ='/movies'><li>Top rated Movies</li></Link>
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
