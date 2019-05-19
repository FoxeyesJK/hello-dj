import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component{
    getPostList = () => {
        const { tag, page, ListActions } = this.props;
        ListActions.getPOstList({
            page,
            tag
        })
    }
}

