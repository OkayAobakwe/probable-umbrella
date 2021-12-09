import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

import { MovieDetailsCard } from "../../components/MovieDetailsCard"
import { movieUrl } from "../../utils/movieUrl"
import { stat } from "fs"

interface MovieProps {
  results: [{
    original_title: string;
    poster_path: string;
    id: number;
    vote_average: number;
  }]
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
  })
  console.log("data", state?.data)
  return (
    <></>
  )
}

export default MovieDetails