import axios from "axios";
import React, { Component } from "react";
import styled, {keyframes} from "styled-components";
import BackImg from '../assets/background2.jpg'
import Carousel from "nuka-carousel/lib/carousel";
import Modal from 'react-modal'

const glitch = keyframes`
0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
`


const Main = styled.section`
border: solid;
width: 100%;
height: 120vh;
//flex-direction: column;
background-image: url(${BackImg});
background-size: cover;
`
const InputBox = styled.div`
position: absolute;
top:3%;
left: 4.4%;
input{
  width: 12vw;
  height: 3vh;
  font-size: 1.2vw;
  border-style: none;
  font-weight: bolder;
  border-radius: 10%;
}
`

const MovieList = styled.div`
width: 18vw;
display: flex;
justify-content: center ;
margin-top:5%;;
align-items: center;
flex-direction: column;
img{
  width: 18vw;
}
`

const MovieCardModal = styled.div`
display: flex;
justify-content: center ;
margin-top:8%;;
align-items: center;
flex-direction: column;
color: white;
img{
  width: 19vw;
}
`
 
const SCarousel = styled(Carousel)`
margin-top:12%;
`

const info = {
  wrapAround: true,
  autoplay: true,
  keyCodeConfig: true,
  autoplayInterval: 3000,
  adaptiveHeight:true,
  frameOverflow:"visible",
  slidesToShow:4.4,
  transitionMode:"scroll", 
  dots: true,
  infinite: false,
  speed: 18500,
  slidesToScroll: 4,
  dragThreshold: 4,
  inicialSlideHeight:'',	
  slideWidth:'140%',
  defaultControlsConfig: {
      nextButtonText: ">",
      prevButtonText: "<",
      pagingDotsStyle: {
          fill: "blue"
      }
        
    }
  }

const BtnMovie = styled.button`
border: solid;
position: absolute;
top:20%;
left: 10%;
width: 19vw;
height: 5vh;
font-size: 1.4vw;
`

const SModal = styled(Modal)`
position: absolute;
left: 30%;
top:20%;
border-radius: 10%;
`

const Button = styled.button`
border: solid;
position: absolute;
left:85%;
top: 3%;
width: 1.5vw;
height: 1.5vw;
`

const MoviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
});
export default class Movies extends Component {
  state = {
    movies: [],
    filterItem: [],
    modal:false
  };


  getMovies = async () => {
    const response = await MoviesApi.get();
    const allmovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: allmovies,
      //filterItem: allmovies   // --- PRA DEIXAR JÁ APARECENDO 
    });
    console.log(allmovies);
  };


  componentDidMount() {
    this.getMovies();
  }

  handleChange = (event) => {
    const { movies } = this.state;

    // eslint-disable-next-line array-callback-return
    const filterItemConvert = movies.filter((item) => {
      if (
        item.original_title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return true
      }
      //return false;
    });
    this.setState({
      filterItem: filterItemConvert
    });



    // if (event.target.value === "") {
    //   this.setState({
    //     filterItem: movies
    //   });
    //   return;
    // }

  };

openModal = () =>{
  this.setState({modal: !this.state.modal})
}

closeModal = () =>{
  this.setState({modal: !this.state.modal})
}
  render() {
    return (
      <Main>
        <div>
          <h1>Top Movies</h1>
        </div>
        <BtnMovie onClick={()=>{this.openModal()}}>Procure por seu filme favorito </BtnMovie>
        <SModal
          isOpen={this.state.modal}
          style={{
            overlay: {
              border: "solid",
            },
            content: {
              backgroundColor: "#363636",
              width: '45%',
              height: '75vh'
            }
          }}
          closeTimeoutMS={500} 
        >
        <InputBox>
          <input
            type="text"
            placeholder="🔍"
            onChange={this.handleChange}
          />
        </InputBox>
         <Button onClick={() =>{this.closeModal()}}>X</Button>
        {this.state.filterItem.map((item, id) => (
            <MovieCardModal key={id}>
              <h1>{item.title}</h1>
              <img src={item.poster_path} alt={item.title} />
              <p>{item.overview.substring(0, 40)}...</p>
            </MovieCardModal>
          ))}
        </SModal>

        {/* <SCarousel
          {...info}
          renderBottomCenterControls={false}
          defaultControlsConfig={{
            nextButtonText: ' >',
            prevButtonText: ' <',
            pagingDotsStyle: {
              fill: 'blue',
            },
          }}
        >
          {this.state.filterItem.map((item, id) => (
            <MovieList key={id}>
              <h1>{item.title}</h1>
              <img src={item.poster_path} alt={item.title} />
              <p>{item.overview.substring(0, 40)}...</p>
            </MovieList>
          ))}
        </SCarousel> */}

        <SCarousel {...info} renderBottomCenterControls={false} 
        defaultControlsConfig={{
           
          nextButtonText: ' >',
          prevButtonText: ' <',
          pagingDotsStyle: {
            fill: 'blue',
          },
        }}
         >
        {this.state.movies.map((item, id) => (
            <MovieList key={id}>
              <img src={item.poster_path} alt={item.title} />
            </MovieList>
          ))}
        </SCarousel>

      <h2>Escrever alguma coisa</h2>
      </Main>
    );
  }
}
