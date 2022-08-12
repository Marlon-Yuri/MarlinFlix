import React, { useState } from 'react'
import Image from '../assets/background.jpg'
import LoginImage from '../assets/loginImage.jpeg'
import styled from 'styled-components'
import Modal from 'react-modal'



const Main = styled.main`
width: 100%;
height: 87vh;
position: absolute;
background-image: url(${Image});
//filter: blur(5px);
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(8, 8, 8, 0.89);
position: absolute;
 
`
const Card = styled.section`
width: 100%;
height: 100%;
display : flex ;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-image: linear-gradient(to right, #8360c3, #2ebf91);
 
`
const BoxCardTitle = styled.div`

`

const SModal =  styled(Modal)`
position: absolute;
left: 33%;
top: 14%;
box-shadow: 5px 10px;
`

const LoginBox = styled.div`
width: 24vw;
height: 25vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 
`
const Img = styled.img`
width: 11vw;
height: 25vh;
border-radius: 50%;
background-image: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
`
const Figure = styled.figure`
 background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
 border-radius: 50%;
`

const Input = styled.input`
font-size: 1.5vw;
font-family: 'Bebas Neue', cursive;
width: 20vw;
height: 5vh;
`
const DivBtn = styled.div`
display: flex;
height: 10vh;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
const BtSend = styled.button`
width: 9vw;
height: 4vh;
position: relative;
top: 20%;
font-family: 'Rubik Marker Hatch', cursive;
color: 	#8B0000;
font-size: 1.2vw;
cursor: pointer;
&:hover{
  font-size: 1.4vw;
   
}
`
const Div = styled.div`
width: 10vw;
display: flex;
justify-content: space-around;
`

const MainTitle = styled.div`
position: absolute;
left: 5%;
top: 17%;
margin-left: -3%;
h1{
  color: white;
  font-size:5vw;
}
h3{
  color: white;
  font-size:3vw;
}
`
const BtnOpen = styled.button`
width: 13vw;
height: 7vh;
font-size: 2vw;
color: white;
background-color: #7A67EE;
font-family: 'Bebas Neue', cursive;
cursor: pointer;
&:hover{
  font-size: 2.5vw;
  color: black
   
}
`
export default function Home() {
 
  const [modal, setModal] = useState(false)
  const [user, setUser] =useState('')

 
function OpenModal(){
  setModal(!modal)
}

function FakesendData (e){
  setModal(false)
}

  return (
    <Main>
      <MainTitle>
         <h1>See what's next </h1>
         <h3>New here ?</h3>
      </MainTitle>
     
      <BtnOpen onClick={()=>{OpenModal()}}>LOGIN</BtnOpen>
      <SModal 
      isOpen={modal}
      style={{
        overlay: {
          border: "solid",
        },
        content: {
          backgroundColor: "#92a8d1",
          width: '35%',
          height: '75vh'
        }
      }}
      closeTimeoutMS={500} 
      >
        
        <Card>
          {/* <BoxCardTitle>
            <h1>Welcome ! </h1>
          </BoxCardTitle> */}
          <Figure>
            <Img src ={LoginImage} />
          </Figure>
            
            <form onSubmit={() =>{FakesendData()}}>
            <LoginBox>
              <label for="user">User</label>
            <Input type="text" name="fname" placeholder='👽'/>
            <label for="password">Password</label>
            <Input   type="password"  name="lname" placeholder='🔑' />
            </LoginBox>  
            <DivBtn> 
              <Div>
                <input type='checkbox' />
                <label for="password">Remember me</label>
              </Div> 
             
            <BtSend onClick={() =>{FakesendData()}}>Send</BtSend>
            </DivBtn>
            
            </form>

      </Card>
      </SModal>
      
    </Main>
  )
}
