import React from 'react'

const Carlist = ({car}) => {
  return (
  <div>
   <h1>List of Cars</h1>
   <ul>
    {car.map((car) => (
      <li>{car.name} {car.model} {car.quantity}</li>
    ))}
   </ul>
  </div>
  )
}

export default Carlist