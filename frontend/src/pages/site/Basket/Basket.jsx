import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Basket = () => {
const {addToBasket,deleteFromBasket,basket}=useContext(MainContext)
  return (
    <div className='container'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
      <th scope="col">Add</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {basket.map((item,index)=>(
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{item.image}</td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button className='btn btn-primary' onClick={()=>addToBasket(item._id)}></button></td>
      <td><button className='btn btn-danger' onClick={()=>deleteFromBasket(item._id)}></button></td>
    </tr>
  ))}
  
   
  </tbody>
</table>
    </div>
  )
}

export default Basket
