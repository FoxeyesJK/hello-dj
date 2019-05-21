import React, { Component } from 'react';
import PostList from 'components/list/PostList';
//import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component{
    getPostList = () => {
        const { city, state, ListActions } = this.props;
        ListActions.getPostList({
            city,
            state
        })
    }

    componentDidMount() {
        this.getPostList();
    }

    componentDidUpdate(prevProps, prevState) {
        // Update list when location data is changed
        if(prevProps.city !== this.props.city || prevProps.state !== this.props.state) {
            this.getPostList();

            // Scroll Bar to the top
            document.documentElement.scrollTop = 0;
        }
    }

    render() {
        const { loading, posts, city, lastPage, state } = this.props;
        if(loading) return null; // Do not show anything while loading
        return (
            /*<div>
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city"/>
            <input type="text" name="state"/>
            <button>Get Weather</button>
            </form>
            </div>*/
            <div>
                hello
                <PostList posts={posts}/>
                {/* <PostList posts={posts}/>
                <Pagination page={page} lastPage={lastPage} tag={tag}/> */}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        lastPage: state.list.get('lastPage'),
        posts: state.list.get('posts'),
        loading: state.pender.pending['list/GET_POST_LIST']
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
)(ListContainer);

