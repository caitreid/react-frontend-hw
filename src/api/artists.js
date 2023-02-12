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

// Create (create a pet)

// Update (update a pet)

// Delete (delete a pet)