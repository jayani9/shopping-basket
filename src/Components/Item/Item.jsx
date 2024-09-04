import React from 'react'
import './Item.css'

const Item = (props) => {
    console.log(props)
  return (
    <div className='item'>
        <img src={props.migara.image} alt="" />
        <p>{props.migara.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.migara.new_price}
            </div>
            <div className="item-price-old">
                ${props.migara.old_price}
            </div>
        </div>
    </div>
    
  )
}

export default Item