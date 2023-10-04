import React from 'react'
// import Post from './Post';

function Blog(props) {

    const content = props.posts.map((post) => {
        return (
            <div> 
                <Post key={post.id} post={post}/> {/*{value} inside paratheses is the one used here, outside one will be passed */}
            </div>
        )
    });

  return (
    <div>
        {content}
    </div>
  )
}


function Post(props) {
    const {id, title, content} = props.post; //props destructure
    return (
        <>
            <div>{id}</div>
            <div>{title}</div>
            <div>{content}</div>
        </>
    )
}

export default Blog;