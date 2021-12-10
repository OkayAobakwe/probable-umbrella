import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

import { MovieDetailsCard } from "../../components/MovieDetailsCard"
import { movieUrl } from "../../utils/movieUrl"

interface MovieProps {
  original_title: string;
  poster_path: string;
  id: number;
  vote_average: number;
  overview?: string;
  genres?: [{
    id: number, name: string
  }];
  release_date?: string;
  tagline?: string;
}
const MovieDetails = () => {

  const router = useRouter()
  const [state, setState] = useState({
    "data": {} as MovieProps
  })
  useEffect(() => {
    axios.get(
      `${movieUrl}${router.query.id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then((res) => setState({ ...state, data: res?.data}))
      .catch((err) => console.log(err))
  },[])
  console.log("data", state?.data)
  return (
    <MovieDetailsCard 
      original_title={state?.data?.original_title} 
      image={state?.data?.poster_path}
      release_date={state?.data?.release_date}
      id={0} 
      tagline={state?.data?.tagline}
      vote_average={state?.data?.vote_average}
      genres={state?.data?.genres}
      overview={state?.data?.overview}      
    />
  )
}

export default MovieDetails