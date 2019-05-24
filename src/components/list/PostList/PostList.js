/*import React from 'react';
// import styles from './PostList.scss';
// import classNames from 'classnames/bind';
import  { Link } from 'react-router-dom';

// const cx = classNames.bind(styles);
  
const PostItem = ({title, body, publishedDate, tags, id}) => {
    const tagList = tags.map(
        tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
    );
    return (
        <div>
        <p>Hello!</p>
              <h1>hi</h1>
              <Form getDJevents={this.getDJevents}/>
              <ul>{itemList}</ul>
              <img src={ImgLink}></img> 
              </div>
        // <div>
        //     <h2><Link to={`/post/${id}`}>{title}</Link></h2>
        //     <div></div>
        //     <p></p>
        //     <div>
        //         {tagList}
        //     </div> 
        // </div>
    )
}

const PostList = ({posts}) => {
    const postList = posts.map(
        (post) => {
            const { _id, title, body, publishedDate, tags } = post.toJS();
            return (

                <PostItem

            />
                // <PostItem
                //     title={title}
                //     body={body}
                //     publishedDate={publishedDate}
                //     tags={tags}
                //     key={_id}
                //     id={_id}
                // />
            )
        }
    );
    return (
        <div>
            {postList}
        </div>
    );
};

export default PostList;*/