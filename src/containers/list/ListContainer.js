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
        const { loading, posts, city, state } = this.props;

        const itemList = (this.state.items.data && this.state.items.data.length > 0) ? this.state.items.data.map(
            (item, index) => 
            <li
              key={index}>
              {item.link}
            </li>
          ) : '';

          let DJname = "Illenium";
          let ImgLink = "https://edmtrain.s3.amazonaws.com/img/artist/" + DJname + ".jpg?v=1";

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
              <p>Hello!</p>
              <h1>hi</h1>
              {/* <Form getDJevents={this.getDJevents}/> */}
              <ul>{itemList}</ul>
              <img src={ImgLink}></img> 
                              {/* <PostList posts={posts}/> */}
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

