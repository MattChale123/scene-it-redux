import { Button } from 'bootstrap'
import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { createDeleteMovie } from '../redux/action'

export default function Watchlist() {
    const movies = useSelector(state => state.watchMovieList)
    console.log(movies)

    const deleteMovie = () => {
        dispatchEvent(createDeleteMovie(movies))
    }

    return (
        <div>
            <h2>My Movies</h2>
            <div>
                <Row>
                    {movies && movies.map((movie) => {
                        return (
                        <Card>
                            <Card.Img varient='top' src={movie.Poster} />
                            <Card.Body>
                                <Card.Title>{movie.Title}</Card.Title>
                                <Card.Text>{movie.Year}</Card.Text>
                                <Button variant='danger' onClick={deleteMovie}>Remove</Button>
                            </Card.Body>
                        </Card>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}
