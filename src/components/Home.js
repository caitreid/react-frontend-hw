import ArtistsIndex from './artists/ArtistsIndex'


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className='container-fluid m-4'>
			<h2>See all the Artists</h2>
			<ArtistsIndex msgAlert={ props.msgAlert } />
		</div>
	)
}

export default Home
