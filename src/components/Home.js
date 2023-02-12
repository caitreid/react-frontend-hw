import ArtistsIndex from './artists/ArtistsIndex'
import Container from 'react-bootstrap/Container'


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<Container className="m-2" style={{textAlign: 'center'}}>
			<h2>See all the Artists</h2>
			<ArtistsIndex msgAlert={ props.msgAlert } />
		</Container>
	)
}

export default Home
