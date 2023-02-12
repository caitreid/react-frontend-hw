import { useState, useEffect } from 'react'

// useParams from react-router-dom allows us to see our route parameters
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { getOneArtist } from '../../api/artists'
import messages from '../shared/AutoDismissAlert/messages'

// we need to get the artist's id from the route parameters
// then we need to make a request to the api
// when we retrieve a artist from the api, we'll render the data on the screen

const ShowArtist = (props) => {
    const [artist, setArtist] = useState(null)

    const { id } = useParams()

    const { user, msgAlert } = props
    console.log('user in ShowArtist props', user)
    console.log('msgAlert in ShowArtist props', msgAlert)

    useEffect(() => {
        getOneArtist(id)
            .then(res => setArtist(res.data.artist))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting artists',
                    message: messages.getArtistsFailure,
                    variant: 'danger'
                })
            })
    }, [])

    if(!artist) {
        return <p>loading...</p>
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Header>{ artist.fullTitle }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Age: { artist.age }</small></div>
                            <div><small>Type: { artist.type }</small></div>
                            <div>
                                <small>
                                    Adoptable: { artist.adoptable ? 'yes' : 'no' }
                                </small>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ShowArtist