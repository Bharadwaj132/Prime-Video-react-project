// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const movieCategory = {
  action: 'ACTION',
  comedy: 'COMEDY',
}

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === movieCategory.action,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === movieCategory.comedy,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
