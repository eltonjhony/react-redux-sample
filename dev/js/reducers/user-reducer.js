import { combineReducers } from 'redux'

const userReducer = combineReducers({
    userList,
    activeUser
})

function userList() {
    return [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Buck is a react developer and Youtuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        }
    ]
}

function activeUser(state = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
    }
    return state;
}

export default userReducer;
