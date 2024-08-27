import React from 'react'
import "./Popular.css"
import items from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
                <div className="popular-item">
                    {items.map((item, i) => {
                        return <Item key={i} child_item={item} />
                    })}
                </div>
        </div>
    )
}

export default Popular