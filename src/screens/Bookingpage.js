import React from 'react';
import { useParams } from "react-router-dom";

function Bookingpage() {
    let { bookingId } = useParams();
    return (
        <div>
            Bookingpage : {bookingId}
        </div>
    )
}

export default Bookingpage
