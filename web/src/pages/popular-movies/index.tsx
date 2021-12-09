import { FC, useEffect, useState } from "react"
import axios from "axios"
import { Flex } from "@chakra-ui/react"

import PopularMovieCard from "../../components/PopularMoviesCard"

import { movieUrl } from "../../utils/movieUrl"
import { ThumbProps } from "../../types/index"


interface MovieProps {
  results: [{
    original_title: string;
    poster_path: string;
    id: number;
    vote_average: number;
    
  }]
}
const PopularMovies: FC<ThumbProps> = () => {
  const [state, setState] = useState({
    "data": {} as MovieProps
  })
  useEffect(() => {
    axios.get(
      `${movieUrl}popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      )
      .then((res) => setState({...state, data: res?.data}))
      .catch((err) => console.log(err))
  }, [])
  console.log("data", state?.data)
  return (
    <Flex flexWrap="wrap" justifyContent="center" mt={10}>
      {state?.data.results?.map((movie) => (
        <PopularMovieCard 
          key={movie.id}
          id={movie.id}
          image={movie.poster_path}
          original_title={movie.original_title}
          vote_average={movie.vote_average}
        />
      ))}
    </Flex>
  )
}

export default PopularMovies