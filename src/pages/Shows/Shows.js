// // import React from 'react'
// // import axios from 'axios';


// // const TvApi = axios.create({
// //     baseURL:
// //       "https://api.themoviedb.org/3/tv/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
// //   });

// // export default class Shows extends React.Component{

 

// // state ={
// //     shows: [],
// //     filterShows: []
// // }
 
// // componentDidMount(){
// //     this.getShows()
// // }

// // getShows = async () => {
// //     const response = await TvApi.get();
// //     const completeShows = response.data.results.map((item) => {
// //       return {
// //         nome: item.name,
// //         poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
// //       };
// //     });

// //     this.setState({
// //       shows: completeShows,
// //       filterShows: completeShows
// //     });
// //     console.log(completeShows);
// //   };


// // //   handleChange = (e) =>{
// // //     const ListaFiltrada = this.state.shows.filter(item => {
// // //         if(item.toLowerCase().includes(e.target.value.toLowerCase())){
// // //             return true
// // //         }
// // //     })
// // //     this.setState({filterShows:ListaFiltrada })

// // //     if (e.target.value === "") {
// // //         this.setState({ filterShows: [] });
// // //       }
// // //   }


// // //   handleChangeFilter = (event) => {
// // //     const { shows } = this.state;
// // //     if (event.target.value === "") {
// // //       this.setState({
// // //         filterShows: shows
// // //       });
// // //       return;
// // //     }
// // //     const filterItemConvert = shows.filter((item) => {
// // //       if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
// // //         return true;
// // //       }
// // //     });
// // //     this.setState({
// // //         filterShows: filterItemConvert
// // //     });
// // //   };


// // filtro = (e) => {
// //     const Result = this.state.shows.filter((item) => {
// //       if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
// //         return true;
// //       }
// //     });
// //     this.setState({ filterShows: Result });

// //     if (e.target.value === "") {
// //       this.setState({ filterShows: [] });
// //     }
// //   };

// //     render(){
// //         return(
// //             <>
// //             <input onChange={this.filtro}/>
// //             <ul>{this.state.filterShows.map(item =>(
// //                 <li>
// //                 {item.nome}
// //                 <img src={item.poster_path} alt={item.name}/>
// //                 </li>
// //             ))}</ul>
// //             </>
// //         )
// //     }
// // }

// import axios from "axios";
// import React, { Component } from "react";
 
 


// const ShowsApi = axios.create({
//   baseURL:
//     "https://api.themoviedb.org/3/tv/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
// });
// export default class Shows extends Component {
//   state = {
//     shows: [],
//     filterItem: []
//   };
//   componentDidMount() {
//     this.getShows();
//   }

//   getShows = async () => {
//     const response = await ShowsApi.get();
//     const completeShows = response.data.results.map((item) => {
//       return {
//         ...item,
//         poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
//       };
//     });

//     this.setState({
//       shows: completeShows,
//       filterItem: completeShows
//     });
//     console.log(completeShows);
//   };

  
//   handleChange = (event) => {
//     const { shows } = this.state;

//     // eslint-disable-next-line array-callback-return
//     const filterItemConvert = shows.filter((item) => {
//       if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
//         return true;
//       }
//     });
//     this.setState({
//       filterItem: filterItemConvert
//     });

//     // if (event.target.value === "") {
//     //     this.setState({
//     //       filterItem: shows
//     //     });
//     //     return;
//     //   }
    
//   };


//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           placeholder="Procure seu seriado"
//           onChange={this.handleChange}
//         />
//         <div>
//           <h1>Top Séries</h1>
//         </div>

//         <div>
//           {this.state.filterItem.map((item, id) => (
//             <div key={id}>
//               <h1>{item.name}</h1>
//               <h2>{item.release_date}</h2>
//               <img src={item.poster_path} alt={item.title} />
//               <p>{item.overview.substring(0, 40)}...</p>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }



import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import BackImg from '../assets/background2.jpg'
import Carousel from "nuka-carousel/lib/carousel";
import Modal from 'react-modal'


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
  //autoplayInterval:8000,
  adaptiveHeight:true,
  frameOverflow:"visible",
  slidesToShow:4.4,
  transitionMode:"scroll", 
  infinite: false,
  speed: 10500,
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
margin-top: 5%;
position: absolute;
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

const ShowsApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
});
export default class Movies extends Component {
  state = {
    shows: [],
    filtershows: [],
    modal:false
  };


  getShows = async () => {
    const response = await ShowsApi.get();
    const allshows = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      shows: allshows,
      //filterItem: allmovies   // --- PRA DEIXAR JÁ APARECENDO 
    });
    console.log(allshows);
  };


  componentDidMount() {
    this.getShows();
  }

  handleChange = (event) => {
    const { shows } = this.state;
    // eslint-disable-next-line array-callback-return
    const filterItemConvert = shows.filter((item) => {
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
        <BtnMovie onClick={()=>{this.openModal()}}>ABRIR </BtnMovie>
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
        {this.state.filtershows.map((item, id) => (
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
        {this.state.shows.map((item, id) => (
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
