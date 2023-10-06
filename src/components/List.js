import React from 'react'

function List({list}) {



  return (
    <div>
        <ul>
            {list.map(item => {
                return <li key={item.id}>{item.title}</li>            
            })}
        </ul>
    
    </div>
  )
}

export default List