import React from 'react'

function Welcome(props) {
    console.log(props);
  return (
    <div>Hello {props.user.firstname} from Welcome component</div>
  )
}

export default Welcome