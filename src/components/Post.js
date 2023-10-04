import React from 'react'

function Post(props) {
  return (
    <div>
        <li key={props.id}>{props.id}</li>
        <li>{props.title}</li>
        <li>{props.content}</li>
    </div>
  )
}

export default Post