import React from 'react';
import  { Link } from 'react-router-dom';
import LocationInput from 'components/common/Input/LocationInput';

const PostForm = ({value, onChange, onInsert }) => {
    
    // Execute onInsert when Enter is pressed
    const handleKeyPress = (e) => {
        if((e.key) === 'Enter') {
            onInsert();
        }
    }

    return (
    <div>
        <input onChange={onchange} value={value} onKeyPress={handleKeyPress} />
    </div>
    );
};

export default PostForm;