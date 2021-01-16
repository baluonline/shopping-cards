import * as actions from '../actions';
const initialState = {
    userName: '',
    userPic: null,
    pageNumber: 0,
    itemsCount: 10,
    users: [],
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            };
        case actions.DECREMENT:
            return {
                ...state,
                pageNumber: state.pageNumber - 1,
            };
        case actions.FETCH_USERS:
            return {
                ...state,
                users: action.data
            }
            default:
                return state;
    }
}

/*
const songsReducer = () => {
    return [
        {
            title: 'venkatesaya',
            duration: '4.05'
        }, {
            title: 'anjineya',
            duration: '4.05'
        }, {
            title: 'lakshme',
            duration: '4.05'
        }, {
            title: 'bhavani',
            duration: '4.05'
        }
    ];
};

const selectedSong = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}
 */