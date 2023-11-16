import React from 'react'

function About({blogData}) {
  return (
    <div>
        <aside>
            <img src={blogData.image} placeholder='https://via.placeholder.com/215'alt={blogData.image}/>
            <p>{blogData.about}</p>
        </aside>
    </div>
  )
}

export default About
