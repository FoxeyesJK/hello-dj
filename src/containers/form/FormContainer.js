import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as listActions from 'store/modules/list';

// Obtain action creation functions
import * as inputActions from 'store/modules/input';
import PostForm from 'components/form/PostForm';

class FormContainer extends Component {
    // getLocation = () => {
    //     const { value, InputActions } = this.props;
    //     InputActions.getLocation({
    //         value
    //     })
    // }

    // componentDidMount() {
    //     this.getLocation();
    // }

    // Only renders when props are updated
    componentDidUpdate(prevProps, prevState) {
        // Update list when location data is changed
        if(prevProps.city !== this.props.city || prevProps.state !== this.props.state) {
            this.getLocation();

            // Scroll Bar to the top
            document.documentElement.scrollTop = 0;
        }
    }

    handleChange = (e) => {
        const { city, state } = e.target;
        const { InputActions } = this.props;
        InputActions.setInput(city, state);
    }

    handleInsert = () => {
        const { InputActions, city, state } = this.props;
        InputActions.setInput('');
    }

    render() {
        const { city, state } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <PostForm 
                onChange={handleChange}
                onInsert={handleInsert}
                city={city}
                state={state}
            />
        );
    }
}

export default connect(
    (state) => ({
        value: state.input//.get('value')
    }),
    (dispatch) => ({
        // bindActionCreators allows dispatch data without initalizing one by one
        // this.props.InputActions.setInput: calling data code
        InputActions: bindActionCreators(inputActions, dispatch)
    })
)(FormContainer);