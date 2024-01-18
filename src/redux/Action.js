export const addCart = (id) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_CART', payload: id })
    }
}

export const deleteCart = (id) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_CART', payload: id })
    }
}
 //this is thunk function ... 