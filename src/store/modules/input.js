import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const SEARCH = 'input/SEARCH';
const SET_INPUT = 'input/SET_INPUT';
const CHANGE_LOCATION_INPUT = 'input/CHANGE_LOCATION_INPUT';

export const search = createAction(SEARCH, api.getPostList);
export const setInput = createAction(SET_INPUT);
export const changeLocationInput = createAction(CHANGE_LOCATION_INPUT);

const initialState = Map({
        city: 36,
        state: 94,
        error: false
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
        type: SEARCH,
        onSuccess: (state, action) => {
            const { city } = action.payload.city;
            return state.set('city', city);
        }
    }),
    [CHANGE_LOCATION_INPUT]: (state, action) => {
        const { payload: city } = action;
        return state.set('city',city);
                    //.set('state', state);
    }
}, initialState)