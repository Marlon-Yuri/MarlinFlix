// import React from 'react'
// import axios from 'axios';


// const TvApi = axios.create({
//     baseURL:
//       "https://api.themoviedb.org/3/tv/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
//   });

// export default class Shows extends React.Component{

 

// state ={
//     shows: [],
//     filterShows: []
// }
 
// componentDidMount(){
//     this.getShows()
// }

// getShows = async () => {
//     const response = await TvApi.get();
//     const completeShows = response.data.results.map((item) => {
//       return {
//         nome: item.name,
//         poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
//       };
//     });

//     this.setState({
//       shows: completeShows,
//       filterShows: completeShows
//     });
//     console.log(completeShows);
//   };


// //   handleChange = (e) =>{
// //     const ListaFiltrada = this.state.shows.filter(item => {
// //         if(item.toLowerCase().includes(e.target.value.toLowerCase())){
// //             return true
// //         }
// //     })
// //     this.setState({filterShows:ListaFiltrada })

// //     if (e.target.value === "") {
// //         this.setState({ filterShows: [] });
// //       }
// //   }


// //   handleChangeFilter = (event) => {
// //     const { shows } = this.state;
// //     if (event.target.value === "") {
// //       this.setState({
// //         filterShows: shows
// //       });
// //       return;
// //     }
// //     const filterItemConvert = shows.filter((item) => {
// //       if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
// //         return true;
// //       }
// //     });
// //     this.setState({
// //         filterShows: filterItemConvert
// //     });
// //   };


// filtro = (e) => {
//     const Result = this.state.shows.filter((item) => {
//       if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
//         return true;
//       }
//     });
//     this.setState({ filterShows: Result });

//     if (e.target.value === "") {
//       this.setState({ filterShows: [] });
//     }
//   };

//     render(){
//         return(
//             <>
//             <input onChange={this.filtro}/>
//             <ul>{this.state.filterShows.map(item =>(
//                 <li>
//                 {item.nome}
//                 <img src={item.poster_path} alt={item.name}/>
//                 </li>
//             ))}</ul>
//             </>
//         )
//     }
// }

import axios from "axios";
import React, { Component } from "react";
 
 


const ShowsApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
});
export default class Shows extends Component {
  state = {
    shows: [],
    filterItem: []
  };
  componentDidMount() {
    this.getShows();
  }

  getShows = async () => {
    const response = await ShowsApi.get();
    const completeShows = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      shows: completeShows,
      filterItem: completeShows
    });
    console.log(completeShows);
  };

  
  handleChange = (event) => {
    const { shows } = this.state;

    // eslint-disable-next-line array-callback-return
    const filterItemConvert = shows.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      filterItem: filterItemConvert
    });

    // if (event.target.value === "") {
    //     this.setState({
    //       filterItem: shows
    //     });
    //     return;
    //   }
    
  };


  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Procure seu seriado"
          onChange={this.handleChange}
        />
        <div>
          <h1>Top Séries</h1>
        </div>

        <div>
          {this.state.filterItem.map((item, id) => (
            <div key={id}>
              <h1>{item.name}</h1>
              <h2>{item.release_date}</h2>
              <img src={item.poster_path} alt={item.title} />
              <p>{item.overview.substring(0, 40)}...</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
