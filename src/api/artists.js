// this is where our api calls for the pets resource will live
import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllArtists = () => {
    return axios(`${apiUrl}/artists`)
}

// READ -> Show
export const getOneArtist = (id) => {
    return axios(`${apiUrl}/artists/${id}`)
}

// Create (create a artist)
export const createArtist = (user, newArtist) => {
    console.log('this is the user', user)
    console.log('this is the newArtist', newArtist)
    return axios({
        url: `${apiUrl}/artists`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { artist: newArtist }
    })
}

// Update (update a pet)

// Delete (delete a pet)