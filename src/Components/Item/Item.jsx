import React from 'react'
import './Item.css'

const Item = (props) => {
    console.log(props)
  return (
    <div className='item'>
        <img src={props.child_item.image} alt="" />
        <p>{props.child_item.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.child_item.new_price}
            </div>
            <div className="item-price-old">
                ${props.child_item.old_price}
            </div>
        </div>
    </div>
    
  )
}

export default Item