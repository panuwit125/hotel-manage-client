import React from 'react'
import { useParams } from "react-router-dom";

function Paymentpage() {
    let { hotelId } = useParams();
    return (
        <div>
            Payment : {hotelId}
        </div>
    )
}

export default Paymentpage
