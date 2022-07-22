import React from 'react'
import Categoryitem from '../categoryitem/Categoryitem'
 import './directory.scss'

 const categories=[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "route":"shop/hats"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "route":"shop/jackets"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://images.unsplash.com/photo-1615290642882-6b9501729a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "route":"shop/sneakers"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "route":"shop/womens"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://images.unsplash.com/photo-1556452577-546c26ca6e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxtZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "route":"shop/mens"
  }
]
export default function Directory() {
  return (
    <div className='categories-container'> 
          {
            categories.map((element)=>
                (
                 <Categoryitem key={element.id} element={element}/>
              )
            )
          }
        </div>
  )
}
