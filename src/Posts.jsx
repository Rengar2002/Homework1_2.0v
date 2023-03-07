import React from 'react'
import {Link} from 'react-router-dom'
import "./style/Posts.css"


const Posts = (props) => {
  

  console.log(props.id)
  
  return (
    <div className='Postshead'>
      <div>
      <p>{props.keys} {props.value}</p>
      </div>
      <div>
      <p>{props.name}</p>
      <p>{props.description}</p>
      </div>
      <Link key={props.keys} to={`/${props.id}`}>
        <button>Подробнее</button>
      </Link>
    </div>
  )
}

export default Posts