import React from 'react'
import Article from './Article'

function ArticleList({blogData}) {
  // console.log(blogData)
  return (
    <div>
        {blogData.map(post=>{
           return <Article key ={post.id} title= {post.title} date= {post.date} preview= {post.preview}/>
               
        })}
    </div>
  )
}

export default ArticleList