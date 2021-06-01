import React,{ useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { useDispatch } from 'react-redux'
import { setData, setLoading } from '../redux/action'
import { useSelector } from "react-redux";

export default function Home() {
    // const [movies, setMovies] = useState([]);
    const [movieSearch, setMovieSearch] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading)

    const fetchMovie = () => {
        dispatch(setLoading(true))
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${movieSearch}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setLoading(false))
                // setMovies(data.Search || [])
                dispatch(setData(data.Search))
                if (data.Error) {
                    alert(data.Error)
                }

            })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovie()

    }
    const handleChange = (e) => {
        setMovieSearch(e.target.value)
    }
    

    return (
        <div>
            <h1>Have you Scene-It?</h1> <br></br>
            <form onSubmit={handleSubmit}>
                <input size="lg" type="text" placeholder="Search Movie" value={movieSearch} onChange={handleChange}/>
                <br />
                <button variant="dark">Search</button>
            </form>
        

        {loading ? (
            'Loading...'
        ): (
          <Row>
                    <Col>
                        <MovieCard />
                    </Col>
            </Row>
        )}

        </div>
    )
}
