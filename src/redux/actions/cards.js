import axios from 'axios'

const setLoaded = (name) => ({
    type: "SET_LOADED",
    payload: name
});

export const fetchCards = (category, sortBy) => (dispatch)=> {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/array?${category !== 0 ? `category=${category}` : ''}&_sort=${sortBy}`).then(({data}) => {
        console.log(category, sortBy);
        dispatch(setCards(data));
    });
};


export const setCards = (name) => ({
    type: "SET_CARDS",
    payload: name,
});
