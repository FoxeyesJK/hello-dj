
import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types

// action creators

// initial state
const initialState = Map({});

// reducer
export default handleActions({

}, initialState)
/*
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';

// action creators
export const getPostList = createAction(GET_POST_LIST, api.getPostLIst, meta => meta);

// initial state
const initialState = Map({
    posts: List(),
    lastPage: null
});

// reducer
export default handleActions({
    ...pender({
        type: GET_POST_LIST,
        onSuccess: (state, action) => {
            const { data: posts } = action.payload;

            const lastPage = action.payload.headers['last-page'];
            return state.set('posts', fromJS(posts))
                        .set('lastPage', parseInt(lastPage, 10));
        }
    })
}, initialState)*/