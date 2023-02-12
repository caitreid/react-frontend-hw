import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'

// api function from our api file
import { getAllArtists } from '../../api/artists'

// need our messages from our autodismissalert directory
import messages from '../shared/AutoDismissAlert/messages'

// this is a styling object. they're a quick easy way add focused css properties to our react components
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

// ArtistsIndex will make a request to the API for all artists
// once it receives a response, display a card for each artist
const ArtistsIndex = (props) => {
    const [artists, setArtists] = useState(null)
    const [error, setError] = useState(false)
    console.log('these are the artists in index', artists)
    // pull the message alert (msgAlert) from props
    const { msgAlert } = props

    // get our Artists from the api when the component mounts
    useEffect(() => {
        getAllArtists()
            .then(res => setArtists(res.data.artists))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting artists',
                    message: messages.getArtistsFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!artists) {
        // if no artists loaded yet, display 'loading'
        return <LoadingScreen />
    } else if (artists.length === 0) {
        // otherwise if there ARE no artists, display that message
        return <p>No artists yet, go add some!</p>
    }

    // once we have an array of artists, loop over them
    // produce one card for every artist
    const artistCards = artists.map(artist => (
        <Card key={ artist.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ artist.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/artists/${artist.id}`} className="btn btn-info">View { artist.name }</Link>
                </Card.Text>
                { artist.owner ?
                <Card.Footer>
                     owner: {artist.owner.email} 
                </Card.Footer>
                : null}
            </Card.Body>
        </Card>
    ))

    // return some jsx, a container with all the artistcards
    return (
        <div className="container-md" style={ cardContainerStyle }>
            { artistCards }
        </div>
    )
}

// export our component
export default ArtistsIndex