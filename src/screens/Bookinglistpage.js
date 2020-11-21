import React from 'react'
import CardComponent from '../components/component.cardmybooking'

function Bookinglistpage() {
    return (
        <div className="ht-bk-container">
            <div className="ht-bk-box">
                <h1>My booking</h1>
                <CardComponent />
                <CardComponent />
            </div>
        </div>
    )
}

export default Bookinglistpage
