import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAddMovie } from '../redux/action'

export default function MovieCard() {
    const movies = useSelector((state) => state.data.movieArray)
    const dispatch = useDispatch()
    console.log(movies)
    const addMovie = () => {
        dispatch(createAddMovie(movies))
    }

    return (
        <div>
            {movies.map((movie) => {
                return (
                <Card>
                    <Card.Img varient='top' src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>{movie.Year}</Card.Text>
                        <Button variant='danger' onClick={addMovie}>Add</Button>
                    </Card.Body>
                </Card>
                )
            })}
        </div>
        
    )
}
