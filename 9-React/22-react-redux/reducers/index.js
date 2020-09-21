import {combineReducers} from "redux";

let songsArr = [
    {title:'Its the final countdown',duration:'5.20'},
    {title:'bye bye',duration:'7.40'},
    {title:'If tommoro never come',duration:'6.00'}
]

const songReducer = (songs = songsArr, action) => {
    if (action.type === 'ADD_SONG') {
        songsArr.push(action.payload)
        return [...songsArr]
    }
    return songs
}

const selectedSongReducer = (selectedsong = null,action) => {
    if (action.type === 'SONG_SELECTED') {
        // if action contains payload that we are changing the main state
        return action.payload
    }
    
    return selectedsong

}
export default combineReducers({
    songs:songReducer,
    selectedsong:selectedSongReducer
})
