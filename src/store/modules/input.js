import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = Map({
    value: ''
});

// //Creating reducer
// export default handleActions({
//     [SET_INPUT]: (state, action) => {
//         return state.set('value', action.payload)
//     }
// })

// reducer
export default handleActions({
    ...pender({
        type: SET_INPUT,
        onSuccess: (state, action) => {
            //const { data: value } = action.payload;
            return state.set('value', action.payload);
        }
    })
}, initialState)